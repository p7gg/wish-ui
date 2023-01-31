import { createMemo, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'

import { classes } from './ActionIcon.css'

export interface ActionIconProps extends KButton.ButtonRootOptions, AtomicStylesProps {}

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>((_props) => {
  const props = combineProps({}, _props)

  const [local, variants, atomics, others] = splitProps(
    props,
    ['children', 'class', 'style'],
    [],
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
