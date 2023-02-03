import { createMemo, JSX, Show, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import { clsx } from 'clsx'

import { Loader, LoaderProps } from '../Loader'
import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { ButtonGroup, useButtonGroup } from './ButtonGroup'

import { buttonGroupBorderWidthVar, classes } from './Button.css'

import type { WishButton, WishColor, WishSize } from '../constants'

export interface ButtonProps extends KButton.ButtonRootOptions, AtomicStylesProps {
  /**
   * Button size
   *
   * @remarks
   * See {@link WishSize| the WishSize union} for more details.
   *
   * @default sm
   */
  size?: WishSize

  /**
   * Button border-radius
   *
   * @remarks
   * See {@link WishSize| the WishSize union} for more details.
   *
   * @default sm
   */
  radius?: WishSize

  /**
   * Button color-scheme
   *
   * @remarks
   * See {@link WishColor| the WishColor union} for more details.
   *
   * @default theme.primaryColor
   */
  colorScheme?: WishColor

  /**
   * Controls button appearance
   *
   * @remarks
   * See {@link WishButton| the WishButton union} for more details.
   *
   * @default filled
   */
  variant?: WishButton

  /**
   * Reduce vertical and horizontal spacing
   *
   * @default false
   */
  compact?: boolean

  /**
   * Make button take full width of parent element
   *
   * @default false
   */
  fullWidth?: boolean

  /**
   * Indicate loading state
   *
   * @default false
   */
  loading?: boolean

  /**
   * Set text-transform to uppercase
   *
   * @defaut false
   */
  uppercase?: boolean

  /** Props spread to Loader component */
  loaderProps?: LoaderProps

  /**
   * Loader position relative to button label
   *
   * @default left
   */
  loaderPosition?: 'left' | 'right' | 'center'

  /** Add icon to the left of the label element */
  leftIcon?: JSX.Element

  /** Add icon to the right of the label element */
  rightIcon?: JSX.Element
}
export interface ButtonCompositions {
  Group: typeof ButtonGroup
}

export const Button = createPolymorphicComponent<'button', ButtonProps, ButtonCompositions>(
  (_props) => {
    const theme = useWishTheme()
    const btnGroupContext = useButtonGroup()
    const props = combineProps(
      {
        size: 'sm',
        radius: 'sm',
        variant: 'filled',
        loaderPosition: 'left',
        compact: false,
        fullWidth: false,
        loading: false,
        uppercase: false,
        get colorScheme() {
          return _props.colorScheme ?? theme.primaryColor
        },
        get withLeftIcon() {
          return !!_props.leftIcon
        },
        get withRightIcon() {
          return !!_props.rightIcon
        },
        get groupOrientation() {
          return btnGroupContext?.orientation
        },
        get isDisabled() {
          return _props.disabled
        },
        get style() {
          return assignInlineVars({
            [buttonGroupBorderWidthVar]: `${btnGroupContext?.buttonBorderWidth}px`,
          })
        },
      } as const,
      _props,
    )

    const [local, variants, atomics, others] = splitProps(
      props,
      ['children', 'class', 'style', 'leftIcon', 'rightIcon', 'loaderProps', 'loaderPosition'],
      [
        'size',
        'radius',
        'colorScheme',
        'variant',
        'loading',
        'compact',
        'uppercase',
        'fullWidth',
        'withLeftIcon',
        'withRightIcon',
        'groupOrientation',
      ],
      [...atomicStyles.properties.keys()],
    )
    const atoms = createMemo(() => atomicStyles(atomics))

    const loader = () => (
      <Loader colorScheme="currentColor" size={variants.size} {...local.loaderProps} />
    )

    return (
      <KButton.Root
        class={clsx(classes.root(variants), atoms().className, local.class)}
        style={combineStyle(atoms().style, local.style ?? {})}
        {...others}
      >
        <div class={classes.inner}>
          {(local.leftIcon || (variants.loading && local.loaderPosition === 'left')) && (
            <span class={classes.leftIcon}>
              <Show when={variants.loading} fallback={local.leftIcon}>
                {loader()}
              </Show>
            </span>
          )}

          <Show when={variants.loading && local.loaderPosition === 'center'}>
            <span class={classes.centerLoader}>{loader()}</span>
          </Show>

          <span class={classes.label}>{local.children}</span>

          {(local.rightIcon || (variants.loading && local.loaderPosition === 'right')) && (
            <span class={classes.rightIcon}>
              <Show when={variants.loading} fallback={local.rightIcon}>
                {loader()}
              </Show>
            </span>
          )}
        </div>
      </KButton.Root>
    )
  },
)

Button.Group = ButtonGroup
