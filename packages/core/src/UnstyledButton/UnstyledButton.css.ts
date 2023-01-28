import { recipe } from '@vanilla-extract/recipes'

import { focusStyles } from '../css'
import { vars } from '../theme'
import { recipes, withColorMode } from '../utils'

const root = recipe({
  base: {
    fontFamily: vars.fonts.sans,
    cursor: 'pointer',
    border: 0,
    padding: 0,
    appearance: 'none',
    fontSize: vars.fontSizes.md,
    backgroundColor: 'transparent',
    textAlign: 'left',
    textDecoration: 'none',
    boxSizing: 'border-box',
    color: vars.colors.black,

    selectors: {
      ...withColorMode({
        dark: {
          color: vars.colors.gray12,
        },
      }),
    },
  },
})

export const unstyledButton = recipes(root, focusStyles)
