import { createMemo, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { classes } from './UnstyledButton.css'

import type { WishColor } from '../constants'

export interface UnstyledButtonProps extends KButton.ButtonRootOptions, AtomicStylesProps {
  /**
   * Defines button focus-ring color
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
      get colorScheme() {
        return theme.primaryColor
      },
      get isDisabled() {
        return _props.disabled
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
      class={clsx(classes.root(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    />
  )
})
