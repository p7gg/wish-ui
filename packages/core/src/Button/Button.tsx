import { ComponentProps, createMemo, Show, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps } from '@solid-primitives/props'
import { calc } from '@vanilla-extract/css-utils'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import { Loader } from '../Loader'
import { AtomicStyles, atomicStyles } from '../theme'
import { createPolymorphicComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { loaderSizeVar } from '../Loader/Loader.css'
import {
  button,
  buttonHeightVar,
  ButtonVariantProps,
  centerLoader,
  inner,
  label,
  leftIcon,
  rightIcon,
} from './Button.css'

import type { JSX } from 'solid-js'

type KButtonProps = ComponentProps<typeof KButton.Root>
export type ButtonProps = KButtonProps &
  ButtonVariantProps &
  AtomicStyles & {
    /** Adds icon before button label  */
    leftIcon?: JSX.Element

    /** Adds icon after button label  */
    rightIcon?: JSX.Element

    /** Loader position relative to button label */
    loaderPosition?: 'left' | 'right' | 'center'
  }

export const Button = createPolymorphicComponent<'button', ButtonProps>((_props) => {
  const theme = useWishTheme()

  const [local, variants, atomicProps, rest] = splitProps(
    _props,
    ['leftIcon', 'rightIcon', 'loaderPosition', 'children'],
    ['variant', 'colorScheme', 'size', 'radius', 'fullWidth', 'loading', 'compact', 'uppercase'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomicProps))

  const props = combineProps(
    {
      as: 'button',
      get class() {
        return `${button({
          colorScheme: variants.colorScheme ?? theme.primaryColor,
          compact: variants.compact ?? false,
          fullWidth: variants.fullWidth ?? false,
          loading: variants.loading ?? false,
          radius: variants.radius ?? 'sm',
          size: variants.size ?? 'sm',
          uppercase: variants.uppercase ?? false,
          variant: variants.variant ?? 'filled',
          get withLeftIcon() {
            return !!local.leftIcon
          },
          get withRightIcon() {
            return !!local.rightIcon
          },
        })} ${atoms().className}`
      },
      get style() {
        return atoms().style
      },
    } as const,
    rest,
  )

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
    <KButton.Root {...props}>
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
