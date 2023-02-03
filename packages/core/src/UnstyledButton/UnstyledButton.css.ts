import { createVar, fallbackVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../theme'
import { withColorMode } from '../utils'

const unsbFocusRingColorVar = createVar()

const root = recipe({
  base: {
    fontFamily: fallbackVar(vars.fonts.sans, 'sans-serif'),
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

    ':focus': {
      outlineOffset: 2,
      outline: `.125rem solid ${unsbFocusRingColorVar}`,
    },

    selectors: {
      ...withColorMode({
        dark: {
          color: vars.colors.gray12,
        },
      }),
      ['&:focus:not(:focus-visible)']: {
        outline: 'none',
      },
    },
  },
  variants: {
    colorScheme: {
      sky: {},
      mint: {},
      lime: {},
      yellow: {},
      amber: {},
      gray: {},
      mauve: {},
      slate: {},
      sage: {},
      olive: {},
      sand: {},
      gold: {},
      bronze: {},
      tomato: {},
      red: {},
      crimson: {},
      pink: {},
      plum: {},
      purple: {},
      violet: {},
      indigo: {},
      blue: {},
      cyan: {},
      teal: {},
      green: {},
      grass: {},
      orange: {},
      brown: {},
    },
  },
})

export const classes = {
  root,
}
