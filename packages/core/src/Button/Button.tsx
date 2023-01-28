import { createMemo, Show, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'
import { calc } from '@vanilla-extract/css-utils'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import { clsx } from 'clsx'

import { Loader } from '../Loader'
import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { loaderSizeVar } from '../Loader/Loader.css'
import {
  button,
  buttonHeightVar,
  centerLoader,
  inner,
  label,
  leftIcon,
  rightIcon,
} from './Button.css'

import type { WishColor, WishSize } from '../constants'
import type { JSX } from 'solid-js'

export interface ButtonProps extends KButton.ButtonRootOptions, AtomicStylesProps {
  /** Predefined button size */
  size?: WishSize

  /** Button color from theme */
  colorScheme?: WishColor

  /** Adds icon before button label  */
  leftIcon?: JSX.Element

  /** Adds icon after button label  */
  rightIcon?: JSX.Element

  /** Sets button width to 100% of root element */
  fullWidth?: boolean

  /** Button border-radius from theme */
  radius?: WishSize

  /** Controls button appearance */
  variant?: 'filled' | 'light' | 'subtle' | 'outline' | 'default'

  /** Reduces vertical and horizontal spacing */
  compact?: boolean

  /** Indicate loading state */
  loading?: boolean

  /** Loader position relative to button label */
  loaderPosition?: 'left' | 'right' | 'center'
}

export const Button = createPolymorphicComponent<'button', ButtonProps>((_props) => {
  const theme = useWishTheme()
  const props = combineProps(
    {
      as: 'button',
      loaderPosition: 'left',
      variant: 'filled',
      size: 'sm',
      radius: 'sm',
      fullWidth: false,
      loading: false,
      compact: false,
      uppercase: false,
      withLeftIcon: !!_props.leftIcon,
      withRightIcon: !!_props.rightIcon,
      get colorScheme() {
        return _props.colorScheme ?? theme.primaryColor
      },
    } as const,
    _props,
  )

  const [local, variants, atomics, others] = splitProps(
    props,
    ['children', 'class', 'style', 'leftIcon', 'rightIcon', 'loaderPosition'],
    [
      'variant',
      'colorScheme',
      'size',
      'radius',
      'fullWidth',
      'loading',
      'compact',
      'uppercase',
      'withRightIcon',
      'withLeftIcon',
    ],
    [...atomicStyles.properties.keys()],
  )

  const atoms = createMemo(() => atomicStyles(atomics))

  const loader = (
    <Loader
      colorScheme="currentColor"
      size={variants.size}
      style={assignInlineVars({
        [loaderSizeVar]: calc.divide(buttonHeightVar, 2),
      })}
    />
  )

  return (
    <KButton.Root
      class={clsx(button(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...(others as any)}
    >
      <div class={inner}>
        <Show when={local.leftIcon || (variants.loading && local.loaderPosition === 'left')}>
          <span class={leftIcon}>
            <Show
              when={variants.loading && local.loaderPosition === 'left'}
              fallback={local.leftIcon}
            >
              {loader}
            </Show>
          </span>
        </Show>

        <Show when={variants.loading && local.loaderPosition === 'center'}>
          <span class={centerLoader}>{loader}</span>
        </Show>

        <span class={label}>{local.children}</span>

        <Show when={local.rightIcon || (variants.loading && local.loaderPosition === 'right')}>
          <span class={rightIcon}>
            <Show
              when={variants.loading && local.loaderPosition === 'right'}
              fallback={local.rightIcon}
            >
              {loader}
            </Show>
          </span>
        </Show>
      </div>
    </KButton.Root>
  )
})
