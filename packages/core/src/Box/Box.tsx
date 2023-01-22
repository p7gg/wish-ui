import { createMemo, splitProps } from 'solid-js'
import { Dynamic } from 'solid-js/web'

import { combineProps } from '@solid-primitives/props'

import { rainbowSprinkles, Sprinkles } from '../theme'
import { createPolymorphicComponent } from '../utils'

export type BoxProps = Sprinkles

export const Box = createPolymorphicComponent<'div', BoxProps>((_props) => {
  const [sprinklesProps, rest] = splitProps(_props, [...rainbowSprinkles.properties.keys()])
  const sprinkles = createMemo(() => rainbowSprinkles(sprinklesProps))
  const props = combineProps(
    {
      component: 'div',
      get class() {
        return sprinkles().className
      },
      get style() {
        return sprinkles().style
      },
    },
    rest,
  )

  return <Dynamic {...props} />
})
