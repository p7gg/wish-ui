import { createMemo, Show, splitProps } from 'solid-js'

import { Switch as KSwitch } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { classes } from './Switch.css'

import type { WishColor, WishSize } from '../constants'

type SwitchRootOptions = Omit<
  KSwitch.SwitchRootOptions,
  'children' | 'isChecked' | 'isRequired' | 'isDisabled' | 'isReadOnly'
>
export interface SwitchProps extends SwitchRootOptions, AtomicStylesProps {
  /** Switch label */

  label?: string

  /** description, displayed after label */
  description?: string

  /** Displays error message after switch */
  error?: string

  /**
   * Switch colorScheme
   *
   * @default theme.primaryColor
   */
  colorScheme?: WishColor

  /**
   * Switch borderRadius
   *
   * @default sm
   */
  radius?: WishSize

  /**
   * Predefined label font-size and switch width and height
   *
   * @default sm
   */
  size?: WishSize

  /**
   * Position of label
   *
   * @default right
   */
  labelPosition?: 'left' | 'right'
}
export interface SwitchCompositions {}

export const Switch = createComponent<'input', SwitchProps, SwitchCompositions>((_props) => {
  const theme = useWishTheme()
  const props = combineProps(
    {
      size: 'sm',
      radius: 'xl',
      labelPosition: 'right',
      get colorScheme() {
        return theme.primaryColor
      },
      get isChecked() {
        return _props.checked
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
    <KSwitch.Root
      data-error={local.error ? '' : undefined}
      class={clsx(classes.root(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...rootProps}
    >
      <KSwitch.Input class={classes.input} {...others} />

      <KSwitch.Control class={classes.track}>
        <KSwitch.Thumb class={classes.thumb} />
      </KSwitch.Control>

      <div class={classes.labelWrapper}>
        <Show when={!!local.label}>
          <KSwitch.Label class={classes.label}>{local.label}</KSwitch.Label>
        </Show>

        <Show when={!!local.description}>
          <span class={classes.description}>{local.description}</span>
        </Show>

        <Show when={rootProps.validationState === 'invalid'}>
          <span class={classes.error}>{local.error}</span>
        </Show>
      </div>
    </KSwitch.Root>
  )
})
