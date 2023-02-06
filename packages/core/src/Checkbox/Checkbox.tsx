import { createMemo, Show, splitProps } from 'solid-js'

import { Checkbox as KCheckbox } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createComponent, MonomorphicProps } from '../utils'
import { useWishTheme } from '../WishProvider'

import { CheckboxIcon } from './CheckboxIcon'

import { classes, transitionDurationVar } from './Checkbox.css'

import type { WishColor, WishSize } from '../constants'

type CheckboxRootOptions = Omit<
  KCheckbox.CheckboxRootOptions,
  'children' | 'isChecked' | 'isIndeterminate' | 'isRequired' | 'isDisabled' | 'isReadOnly'
>
export interface CheckboxProps extends CheckboxRootOptions, AtomicStylesProps {
  /**
   * Checkbox colorScheme
   *
   * @default theme.primaryColor
   */
  colorScheme?: WishColor

  /**
   * Checkbox borderRadius
   *
   * @default sm
   */
  radius?: WishSize

  /**
   * Predefined label font-size and checkbox width and height
   *
   * @default sm
   */
  size?: WishSize

  /**
   * Transition duration in ms
   *
   * @default 100ms
   */
  transitionDuration?: number

  /**
   * Position of label
   *
   * @default right
   */
  labelPosition?: 'left' | 'right'

  /** Checkbox label */
  label?: string

  /** description, displayed after label */
  description?: string

  /** Displays error message after input */
  error?: string

  /**
   * Whether the checkbox is in an indeterminate state.
   * Indeterminism is presentational only.
   * The indeterminate visual representation remains regardless of user interaction.
   *
   * @default false
   */
  indeterminate?: boolean
}
export interface CheckboxCompositions {}

export const Checkbox = createComponent<'input', CheckboxProps, CheckboxCompositions>((_props) => {
  const theme = useWishTheme()
  const props = combineProps(
    {
      size: 'sm',
      radius: 'sm',
      labelPosition: 'right',
      transitionDuration: 100,
      get colorScheme() {
        return theme.primaryColor
      },
      get isChecked() {
        return _props.checked
      },
      get isIndeterminate() {
        return _props.indeterminate
      },
      get isRequired() {
        return _props.required
      },
      get isDisabled() {
        return _props.disabled
      },
      get isReadOnly() {
        return _props.readOnly
      },
      get style() {
        return assignInlineVars({
          [transitionDurationVar]: `${_props.transitionDuration ?? this.transitionDuration}ms`,
        })
      },
    } as const,
    _props,
  )
  const [local, rootProps, variants, atomics, others] = splitProps(
    props,
    ['class', 'style', 'label', 'error', 'description'],
    [
      'isChecked',
      'defaultIsChecked',
      'onCheckedChange',
      'isIndeterminate',
      'name',
      'value',
      'validationState',
      'isRequired',
      'isDisabled',
      'isReadOnly',
    ],
    ['colorScheme', 'size', 'radius', 'labelPosition'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <KCheckbox.Root
      data-error={local.error ? '' : undefined}
      class={clsx(classes.root(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...rootProps}
    >
      <KCheckbox.Input {...others} />

      <KCheckbox.Control data-error={local.error ? '' : undefined} class={classes.control}>
        <KCheckbox.Indicator>
          <CheckboxIcon
            class={classes.icon}
            isChecked={rootProps.isChecked}
            isIndeterminate={rootProps.isIndeterminate}
          />
        </KCheckbox.Indicator>
      </KCheckbox.Control>

      <div class={classes.labelWrapper}>
        <Show when={!!local.label}>
          <KCheckbox.Label class={classes.label}>{local.label}</KCheckbox.Label>
        </Show>

        <Show when={!!local.description}>
          <span class={classes.description}>{local.description}</span>
        </Show>

        <Show when={!!local.error}>
          <span class={classes.error}>{local.error}</span>
        </Show>
      </div>
    </KCheckbox.Root>
  )
})
