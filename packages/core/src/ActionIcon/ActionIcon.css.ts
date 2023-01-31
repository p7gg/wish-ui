import { recipe } from '@vanilla-extract/recipes'

import { focusStyles } from '../css'
import { recipes } from '../utils'

const _root = recipe({
  base: {},
  variants: {},
  compoundVariants: [],
})

const root = recipes(_root, focusStyles)

export const classes = {
  root,
}
