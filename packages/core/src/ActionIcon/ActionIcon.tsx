import { createMemo, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'

import { classes } from './ActionIcon.css'

import type { WishActionIcon, WishColor } from '../constants'

export interface ActionIconProps extends KButton.ButtonRootOptions, AtomicStylesProps {
  /**
   * ActionIcon color-scheme
   *
   * @remarks
   * See {@link WishColor| the WishColor union} for more details.
   *
   * @default gray
   */
  colorScheme?: WishColor

  /**
   * Controls ActionIcon appearance
   *
   * @remarks
   * See {@link WishActionIcon| the WishActionIcon union} for more details.
   *
   * @default subtle
   */
  variant?: WishActionIcon
}

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>((_props) => {
  const props = combineProps(
    {
      colorScheme: 'gray',
      variant: 'subtle',
    } as const,
    _props,
  )

  const [local, variants, atomics, others] = splitProps(
    props,
    ['children', 'class', 'style'],
    ['variant', 'colorScheme'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <KButton.Root
      class={clsx(classes.root(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    >
      {local.children}
    </KButton.Root>
  )
})
