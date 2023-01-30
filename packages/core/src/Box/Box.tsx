import { createMemo, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import { combineProps, combineStyle } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { focusStyles } from '../css'
import { atomicStyles, AtomicStylesProps } from '../theme'
import { createPolymorphicComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import type { WishColor } from '../constants'

export interface BoxProps extends AtomicStylesProps {
  /** Color applied to focus-ring */
  colorScheme?: WishColor
}

export const Box = createPolymorphicComponent<'div', BoxProps>((_props) => {
  const theme = useWishTheme()
  const props = combineProps(
    {
      as: 'div',
      get colorScheme() {
        return _props.colorScheme ?? theme.primaryColor
      },
    },
    _props,
  )
  const [local, variants, atomics, others] = splitProps(
    props,
    ['as', 'class', 'style'],
    ['colorScheme'],
    [...atomicStyles.properties.keys()],
  )
  const atoms = createMemo(() => atomicStyles(atomics))

  return (
    <Dynamic
      component={local.as}
      class={clsx(focusStyles(variants), atoms().className, local.class)}
      style={combineStyle(atoms().style, local.style ?? {})}
      {...others}
    />
  )
})
