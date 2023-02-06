import { createMemo, JSX, Show, splitProps } from 'solid-js'

import { TextField as KTextField } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { classes, inputIconWidthVar, inputRightSectionWidthVar } from './TextField.css'

import type { TextFieldVariant, WishColor, WishSize } from '../constants'

type TextFieldRootOptions = Omit<
  KTextField.TextFieldRootOptions,
  'isRequired' | 'isDisabled' | 'isReadOnly'
>
export interface TextFieldProps extends TextFieldRootOptions, AtomicStylesProps {
  /** Adds icon on the left side of input */
  icon?: JSX.Element

  /** Width of icon section in px */
  iconWidth?: number

  /** Right section of input, similar to icon but on the right */
  rightSection?: JSX.Element

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: number

  /** Input label, displayed before input */
  label?: string

  /** Input description, displayed after label */
  description?: string

  /** Displays error message after input */
  error?: string

  /**
   * Input size
   *
   * @remarks
   * See {@link WishSize| the WishSize union} for more details.
   *
   * @default sm
   */
  size?: WishSize

  /**
   * Input border-radius
   *
   * @remarks
   * See {@link WishSize| the WishSize union} for more details.
   *
   * @default sm
   */
  radius?: WishSize

  /**
   * Defines input appearance, defaults to default in light color scheme and filled in dark
   *
   * @remarks
   * See {@link TextFieldVariant| the TextFieldVariant union} for more details.
   */
  variant?: TextFieldVariant

  /**
   * Input colorScheme
   *
   * @remarks
   * See {@link WishColor| the WishColor union} for more details.
   *
   * @defautl theme.primaryColor
   */
  colorScheme?: WishColor
}
export interface TextFieldCompositions {}

export const TextField = createComponent<'input', TextFieldProps, TextFieldCompositions>(
  (_props) => {
    const theme = useWishTheme()
    const props = combineProps(
      {
        size: 'sm',
        radius: 'sm',
        get variant() {
          return theme.colorMode === 'dark' ? 'filled' : 'default'
        },
        get colorScheme() {
          return theme.primaryColor
        },
        get offsetTop() {
          return !!_props.description
        },
        get offsetBottom() {
          return !!_props.error
        },
        get withIcon() {
          return !!_props.icon
        },
        get withRightSection() {
          return !!_props.rightSection
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
            ...(typeof _props.rightSectionWidth === 'number' && {
              [inputRightSectionWidthVar]: `${_props.rightSectionWidth}px`,
            }),
            ...(typeof _props.iconWidth === 'number' && {
              [inputIconWidthVar]: `${_props.iconWidth}px`,
            }),
          })
        },
      } as const,
      _props,
    )
    const [local, rootProps, variants, atomics, others] = splitProps(
      props,
      [
        'class',
        'style',
        'label',
        'description',
        'error',
        'icon',
        'iconWidth',
        'rightSection',
        'rightSectionWidth',
      ],
      [
        'value',
        'defaultValue',
        'onValueChange',
        'id',
        'name',
        'validationState',
        'isRequired',
        'isDisabled',
        'isReadOnly',
      ],
      [
        'variant',
        'colorScheme',
        'size',
        'radius',
        'offsetTop',
        'offsetBottom',
        'withIcon',
        'withRightSection',
      ],
      [...atomicStyles.properties.keys()],
    )
    const atoms = createMemo(() => atomicStyles(atomics))

    return (
      <KTextField.Root
        class={clsx(classes.root(variants), atoms().className, local.class)}
        style={combineStyle(atoms().style, local.style ?? {})}
        {...rootProps}
      >
        <Show when={local.label}>
          <KTextField.Label class={classes.label}>{local.label}</KTextField.Label>
        </Show>

        <Show when={local.description}>
          <KTextField.Description class={classes.description}>
            {local.description}
          </KTextField.Description>
        </Show>

        <div class={classes.inputWrapper}>
          <Show when={!!local.icon}>
            <div class={classes.icon}>{local.icon}</div>
          </Show>

          <KTextField.Input class={classes.input} {...others} />

          <Show when={!!local.rightSection}>
            <div class={classes.rightSection}>{local.rightSection}</div>
          </Show>
        </div>

        <KTextField.ErrorMessage class={classes.error}>{local.error}</KTextField.ErrorMessage>
      </KTextField.Root>
    )
  },
)
