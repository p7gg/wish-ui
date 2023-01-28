import { createMemo, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'

export type BoxProps = AtomicStylesProps

export const Box = createPolymorphicComponent<'div', BoxProps>((_props) => {
  const props = combineProps(
    {
      as: 'div',
    },
    _props,
  )
  const [local, atomics, others] = splitProps(
    props,
    ['as', 'class', 'style'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <Dynamic
      component={local.as}
      class={clsx(atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    />
  )
})
