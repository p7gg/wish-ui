import { createMemo, Show, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { Loader } from '../Loader'
import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'

import { classes } from './ActionIcon.css'

import type { ActionIconVariant, WishColor, WishSize } from '../constants'

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
   * See {@link ActionIconVariant| the ActionIconVariant union} for more details.
   *
   * @default subtle
   */
  variant?: ActionIconVariant

  /**
   * ActionIcon size
   *
   * @remarks
   * See {@link WishSize| the WishSize union} for more details.
   *
   * @default md
   */
  size?: WishSize

  /**
   * ActionIcon borderRadius
   *
   * @remarks
   * See {@link WishSize| the WishSize union} for more details.
   *
   * @default md
   */
  radius?: WishSize

  /**
   * Indicate loading state
   *
   * @default false
   */
  loading?: boolean
}
export interface ActionIconCompositions {}

export const ActionIcon = createPolymorphicComponent<
  'button',
  ActionIconProps,
  ActionIconCompositions
>((_props) => {
  const props = combineProps(
    {
      colorScheme: 'gray',
      variant: 'subtle',
      size: 'md',
      radius: 'sm',
      get isDisabled() {
        return _props.disabled
      },
    } as const,
    _props,
  )

  const [local, variants, atomics, others] = splitProps(
    props,
    ['children', 'class', 'style'],
    ['variant', 'colorScheme', 'size', 'radius', 'loading'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <KButton.Root
      class={clsx(classes.root(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    >
      <Show
        when={!variants.loading}
        fallback={<Loader size={variants.size} colorScheme="currentColor" />}
      >
        {local.children}
      </Show>
    </KButton.Root>
  )
})
