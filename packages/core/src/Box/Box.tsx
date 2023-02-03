import { createMemo, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import { combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'

export interface BoxProps extends AtomicStylesProps {}
export interface BoxCompositions {}

export const Box = createPolymorphicComponent<'div', BoxProps, BoxCompositions>((props) => {
  const [local, atomics, others] = splitProps(
    props,
    ['as', 'class', 'style'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <Dynamic
      component={local.as ?? 'div'}
      class={clsx(atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    />
  )
})
