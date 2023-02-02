import { createMemo, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { unstyledButton } from './UnstyledButton.css'

import type { WishColor } from '../constants'

export interface UnstyledButtonProps extends KButton.ButtonRootOptions, AtomicStylesProps {
  /**
   * Color applied to focus-ring
   *
   * @remarks
   * See {@link WishColor| the WishColor union} for more details.
   *
   * @default theme.primaryColor
   */
  colorScheme?: WishColor
}
export interface UnstyledButtonCompositions {}

export const UnstyledButton = createPolymorphicComponent<
  'button',
  UnstyledButtonProps,
  UnstyledButtonCompositions
>((_props) => {
  const theme = useWishTheme()
  const props = combineProps(
    {
      as: 'button',
      get colorScheme() {
        return _props.colorScheme ?? theme.primaryColor
      },
    },
    _props,
  )

  const [local, variants, atomics, others] = splitProps(
    props,
    ['class', 'style'],
    ['colorScheme'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <KButton.Root
      class={clsx(unstyledButton(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    />
  )
})
