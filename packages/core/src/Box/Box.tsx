import { createMemo, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import { combineProps } from '@solid-primitives/props'

import { AtomicStyles, atomicStyles } from '../theme'
import { createPolymorphicComponent } from '../utils'

export type BoxProps = AtomicStyles

export const Box = createPolymorphicComponent<'div', BoxProps>((_props) => {
  const [atomicProps, rest] = splitProps(_props, [...atomicStyles.properties.keys()])
  const atoms = createMemo(() => atomicStyles(atomicProps))
  const props = combineProps(
    {
      component: 'div',
      get class() {
        return atoms().className
      },
      get style() {
        return atoms().style
      },
    },
    rest,
  )

  return <Dynamic {...props} />
})
