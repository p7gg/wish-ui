import { createMemo, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'

import { classes } from './UnstyledButton.css'

export interface UnstyledButtonProps extends KButton.ButtonRootOptions, AtomicStylesProps {}
export interface UnstyledButtonCompositions {}

export const UnstyledButton = createPolymorphicComponent<
  'button',
  UnstyledButtonProps,
  UnstyledButtonCompositions
>((props) => {
  const [local, atomics, others] = splitProps(
    props,
    ['class', 'style'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <KButton.Root
      class={clsx(classes.root, atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    />
  )
})
