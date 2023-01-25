import { createVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../theme'

const focusRingColor = createVar()

export const focusStyles = recipe({
  base: {
    WebkitTapHighlightColor: 'transparent',

    ':focus': {
      outlineOffset: '.125rem',
      outline: `2px solid ${focusRingColor}`,
    },

    selectors: {
      '&:focus:not(:focus-visible)': {
        outline: 'none',
      },
    },
  },
  variants: {
    colorScheme: {
      amber: {
        vars: { [focusRingColor]: vars.colors.amber7 },
      },
      blue: {
        vars: { [focusRingColor]: vars.colors.blue7 },
      },
      bronze: {
        vars: { [focusRingColor]: vars.colors.bronze7 },
      },
      brown: {
        vars: { [focusRingColor]: vars.colors.brown7 },
      },
      crimson: {
        vars: { [focusRingColor]: vars.colors.crimson7 },
      },
      cyan: {
        vars: { [focusRingColor]: vars.colors.cyan7 },
      },
      gold: {
        vars: { [focusRingColor]: vars.colors.gold7 },
      },
      grass: {
        vars: { [focusRingColor]: vars.colors.grass7 },
      },
      gray: {
        vars: { [focusRingColor]: vars.colors.gray7 },
      },
      green: {
        vars: { [focusRingColor]: vars.colors.green7 },
      },
      indigo: {
        vars: { [focusRingColor]: vars.colors.indigo7 },
      },
      lime: {
        vars: { [focusRingColor]: vars.colors.lime7 },
      },
      mauve: {
        vars: { [focusRingColor]: vars.colors.mauve7 },
      },
      mint: {
        vars: { [focusRingColor]: vars.colors.mint7 },
      },
      olive: {
        vars: { [focusRingColor]: vars.colors.olive7 },
      },
      orange: {
        vars: { [focusRingColor]: vars.colors.orange7 },
      },
      pink: {
        vars: { [focusRingColor]: vars.colors.pink7 },
      },
      plum: {
        vars: { [focusRingColor]: vars.colors.plum7 },
      },
      purple: {
        vars: { [focusRingColor]: vars.colors.purple7 },
      },
      red: {
        vars: { [focusRingColor]: vars.colors.red7 },
      },
      sage: {
        vars: { [focusRingColor]: vars.colors.sage7 },
      },
      sand: {
        vars: { [focusRingColor]: vars.colors.sand7 },
      },
      sky: {
        vars: { [focusRingColor]: vars.colors.sky7 },
      },
      slate: {
        vars: { [focusRingColor]: vars.colors.slate7 },
      },
      teal: {
        vars: { [focusRingColor]: vars.colors.teal7 },
      },
      tomato: {
        vars: { [focusRingColor]: vars.colors.tomato7 },
      },
      violet: {
        vars: { [focusRingColor]: vars.colors.violet7 },
      },
      yellow: {
        vars: { [focusRingColor]: vars.colors.yellow7 },
      },
    },
  },
  defaultVariants: {
    colorScheme: 'blue',
  },
})
