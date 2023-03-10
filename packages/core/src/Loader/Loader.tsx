import { createMemo, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { classes } from './Loader.css'

import type { LoaderVariant, WishColor, WishSize } from '../constants'
import type { Component, JSX } from 'solid-js'

type SvgHTMLAttributes = JSX.IntrinsicElements['svg']

export const Bars: Component<SvgHTMLAttributes> = (props) => {
  return (
    <svg viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height"
          begin="0.5s"
          dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          begin="0.5s"
          dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="30" y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height"
          begin="0.25s"
          dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          begin="0.25s"
          dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="60" width="15" height="140" rx="6">
        <animate
          attributeName="height"
          begin="0s"
          dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          begin="0s"
          dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="90" y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height"
          begin="0.25s"
          dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          begin="0.25s"
          dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </rect>
      <rect x="120" y="10" width="15" height="120" rx="6">
        <animate
          attributeName="height"
          begin="0.5s"
          dur="1s"
          values="120;110;100;90;80;70;60;50;40;140;120"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y"
          begin="0.5s"
          dur="1s"
          values="10;15;20;25;30;35;40;45;50;0;10"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  )
}
export const Dots: Component<SvgHTMLAttributes> = (props) => {
  return (
    <svg viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="15" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="60" cy="15" r="9" fill-opacity="0.3">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="0.8s"
          values="9;15;9"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="0.5"
          to="0.5"
          begin="0s"
          dur="0.8s"
          values=".5;1;.5"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="105" cy="15" r="15">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="0.8s"
          values="15;9;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="0.8s"
          values="1;.5;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}
export const Oval: Component<SvgHTMLAttributes> = (props) => {
  return (
    <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(2.5 2.5)" stroke-width="5">
          <circle stroke-opacity=".5" cx="16" cy="16" r="16" />
          <path d="M32 16c0-9.94-8.06-16-16-16">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 16 16"
              to="360 16 16"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  )
}

const LOADERS = {
  bars: Bars,
  dots: Dots,
  oval: Oval,
}

export interface LoaderProps extends AtomicStylesProps {
  /**
   * Loader size from theme
   *
   * @remarks
   * See {@link WishSize| the WishSize union} for more details.
   *
   * @default md
   */
  size?: WishSize

  /**
   * Loader color from theme
   *
   * @remarks
   * See {@link WishColor| the WishColor union} for more details.
   *
   * @default theme.primaryColor
   */
  colorScheme?: WishColor | 'currentColor'

  /**
   * Loader appearance
   *
   * @remarks
   * See {@link LoaderVariant| the LoaderVariant union} for more details.
   *
   * @default theme.defaultLoader
   */
  variant?: LoaderVariant
}
export interface LoaderCompositions {}

export const Loader = createComponent<'svg', LoaderProps, LoaderCompositions>((_props) => {
  const theme = useWishTheme()
  const props = combineProps(
    {
      size: 'md',
      get variant() {
        return _props.variant ?? theme.defaultLoader
      },
      get colorScheme() {
        return _props.colorScheme ?? theme.primaryColor
      },
    } as const,
    _props,
  )

  const [local, variants, atomics, others] = splitProps(
    props,
    ['class', 'style'],
    ['variant', 'colorScheme', 'size'],
    [...atomicStyles.properties.keys()],
  )

  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <Dynamic
      role="presentation"
      component={LOADERS[variants.variant]}
      class={clsx(classes.root(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    />
  )
})
