import {
  batch,
  children,
  Component,
  createComputed,
  createMemo,
  createSignal,
  JSX,
  untrack,
} from 'solid-js'

import { nextFrame } from './utils'

import { classes } from './Transition.css'

import type { WishTransition } from '../constants'

export interface TransitionProps {
  /**
   * Used to automatically generate transition CSS class names.
   * e.g. `name: 'fade'` will auto expand to `.fade-enter`,
   * `.fade-enter-active`, etc.
   */
  name?: `w-${WishTransition}` | (string & {})

  /** Added before the element is inserted, removed one frame after the element is inserted. */
  enterFromClass?: string

  /** Applied during the entire entering phase. Added before the element is inserted, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition. */
  enterActiveClass?: string

  /** Added one frame after the element is inserted (at the same time w-enter-from is removed), removed when the transition/animation finishes. */
  enterToClass?: string

  /** Added immediately when a leaving transition is triggered, removed after one frame. */
  exitFromClass?: string

  /** Applied during the entire leaving phase. Added immediately when a leaving transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition */
  exitActiveClass?: string

  /** Added one frame after a leaving transition is triggered (at the same time w-exit-from is removed), removed when the transition/animation finishes */
  exitToClass?: string

  /**
   * Called before the element is inserted into the DOM. Use this to set the `enter-from` state of the element
   *
   * @param el Element node being transitioned
   */
  onBeforeEnter?: (el: Element) => void

  /**
   * Called one frame after the element is inserted. Use this to start the animation.
   *
   * @param el Element node being transitioned
   * @param done Callback to indicate transition end
   */
  onEnter?: (el: Element, done: () => void) => void

  /**
   * Called when the enter transition has finished.
   *
   * @param el Element node being trasitioned
   */
  onAfterEnter?: (el: Element) => void

  /**
   * Called before the exit hook. Most of the time, you should just use the exit hook.
   *
   * @param el Element node being trasitioned
   */
  onBeforeExit?: (el: Element) => void

  /**
   * Called when the exit transition starts. Use this to start the leaving animation.
   *
   * @param el Element node being trasitioned
   * @param done Callback to indicate transition end
   */
  onExit?: (el: Element, done: () => void) => void

  /**
   * Called when the exit transition has finished and the element has been removed from the DOM.
   *
   * @param el Element node being trasitioned
   */
  onAfterExit?: (el: Element) => void

  /** Transition children */
  children?: JSX.Element

  /**
   * Whether to apply transition on initial render.
   * @default false
   */
  appear?: boolean

  /**
   * Controls the timing sequence of leaving/entering transitions.
   *
   * @default simultaneous
   */
  mode?: 'inout' | 'outin'
}

/**
 * `<Transition>` is a component that can be used to apply enter and leave animations on elements or components passed to it via its children prop.
 * The enter or leave can be triggered by one of the following:
 *
 * * Conditional rendering via `show() && <Component />`
 * * Contional rendering via the `<Show>` control flow component
 * * Dynamic components toggling via the `<Switch>` and `<Match>` control flow components
 *
 * Transition work on detecting changes on DOM children. Only supports single DOM child. Not Text or Fragments.
 */
export const Transition: Component<TransitionProps> = (props) => {
  let el: Element
  let first = true
  const [s1, set1] = createSignal<Element | undefined>()
  const [s2, set2] = createSignal<Element | undefined>()
  const resolved = children(() => props.children)

  const { onBeforeEnter, onEnter, onAfterEnter, onBeforeExit, onExit, onAfterExit } = props

  const classnames = createMemo(() => {
    const name = props.name ?? 'w'

    return {
      enterActiveClass:
        props.enterActiveClass ??
        classes[name as `w-${WishTransition}`]?.enterActive ??
        classes[name as `w-${WishTransition}`]?.exitActive ??
        `${name}-enter-active`,
      enterFromClass:
        props.enterFromClass ??
        classes[name as `w-${WishTransition}`]?.enterFrom ??
        classes[name as `w-${WishTransition}`]?.exitTo ??
        `${name}-enter`,
      enterToClass:
        props.enterToClass ??
        classes[name as `w-${WishTransition}`]?.enterTo ??
        classes[name as `w-${WishTransition}`]?.exitFrom ??
        `${name}-enter-to`,
      exitActiveClass:
        props.exitActiveClass ??
        classes[name as `w-${WishTransition}`]?.exitActive ??
        classes[name as `w-${WishTransition}`]?.enterActive ??
        `${name}-exit-active`,
      exitFromClass:
        props.exitFromClass ??
        classes[name as `w-${WishTransition}`]?.exitFrom ??
        classes[name as `w-${WishTransition}`]?.enterTo ??
        `${name}-exit`,
      exitToClass:
        props.exitToClass ??
        classes[name as `w-${WishTransition}`]?.exitTo ??
        classes[name as `w-${WishTransition}`]?.enterFrom ??
        `${name}-exit-to`,
    }
  })

  function enterTransition(el: Element, prev: Element | undefined) {
    if (!first || props.appear) {
      const enterFromClasses = classnames().enterFromClass.split(' ')
      const enterActiveClasses = classnames().enterActiveClass.split(' ')
      const enterToClasses = classnames().enterToClass.split(' ')

      const endTransition = (e?: Event) => {
        if (el && (!e || e.target === el)) {
          el.removeEventListener('transitionend', endTransition)
          el.removeEventListener('animationend', endTransition)
          el.classList.remove(...enterActiveClasses)
          el.classList.remove(...enterToClasses)
          batch(() => {
            s1() !== el && set1(el)
            s2() === el && set2(undefined)
          })
          onAfterEnter && onAfterEnter(el)
          if (props.mode === 'inout') exitTransition(el, prev!)
        }
      }

      onBeforeEnter && onBeforeEnter(el)
      el.classList.add(...enterFromClasses)
      el.classList.add(...enterActiveClasses)
      nextFrame(() => {
        el.classList.remove(...enterFromClasses)
        el.classList.add(...enterToClasses)
        onEnter && onEnter(el, () => endTransition())
        if (!onEnter || onEnter.length < 2) {
          el.addEventListener('transitionend', endTransition)
          el.addEventListener('animationend', endTransition)
        }
      })
    }
    prev && !props.mode ? set2(el) : set1(el)
  }

  function exitTransition(el: Element, prev: Element) {
    const exitFromClass = classnames().exitFromClass.split(' ')
    const exitActiveClasses = classnames().exitActiveClass.split(' ')
    const exitToClasses = classnames().exitToClass.split(' ')

    const endTransition = (e?: Event) => {
      if (!e || e.target === prev) {
        prev.removeEventListener('transitionend', endTransition)
        prev.removeEventListener('animationend', endTransition)
        prev.classList.remove(...exitActiveClasses)
        prev.classList.remove(...exitToClasses)
        s1() === prev && set1(undefined)
        onAfterExit && onAfterExit(prev)
        if (props.mode === 'outin') enterTransition(el, prev)
      }
    }

    if (!prev.parentNode) return endTransition()
    onBeforeExit && onBeforeExit(prev)
    prev.classList.add(...exitFromClass)
    prev.classList.add(...exitActiveClasses)
    nextFrame(() => {
      prev.classList.remove(...exitFromClass)
      prev.classList.add(...exitToClasses)
    })
    onExit && onExit(prev, () => endTransition())
    if (!onExit || onExit.length < 2) {
      prev.addEventListener('transitionend', endTransition)
      prev.addEventListener('animationend', endTransition)
    }
  }

  createComputed<Element>((prev) => {
    el = resolved() as Element
    while (typeof el === 'function') el = (el as Function)()

    return untrack(() => {
      if (el && el !== prev) {
        if (props.mode !== 'outin') enterTransition(el, prev)
        else if (first) set1(el)
      }
      if (prev && prev !== el && props.mode !== 'inout') exitTransition(el, prev)
      first = false

      return el
    })
  })

  return [s1, s2]
}
