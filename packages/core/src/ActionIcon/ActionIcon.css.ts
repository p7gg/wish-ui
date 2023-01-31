import { createVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { isBrightColor, wishColors } from '../constants'
import { focusStyles } from '../css'
import { vars } from '../theme'
import { recipes } from '../utils'

import type { CompoundVariant } from '../types'

const aiBorderColorVar = createVar()
const aiBgColorVar = createVar()
const aiColorVar = createVar()
const aiBgColorHoverVar = createVar()
const aiBgColorActiveVar = createVar()

const getFilledCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'filled',
        colorScheme,
      },
      style: {
        vars: {
          [aiBorderColorVar]: 'transparent',
          [aiBgColorVar]: vars.colors[`${colorScheme}9`],
          [aiColorVar]: isBrightColor(colorScheme) ? vars.colors.black : vars.colors.white,
          [aiBgColorHoverVar]: vars.colors[`${colorScheme}10`],
          [aiBgColorActiveVar]: vars.colors[`${colorScheme}10`],
        },
      },
    })
  }

  return compoundVariants
}
const getSubtleCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        colorScheme,
        variant: 'subtle',
      },
      style: {
        vars: {
          [aiBorderColorVar]: 'transparent',
          [aiBgColorVar]: 'transparent',
          [aiColorVar]: vars.colors[`${colorScheme}11`],
          [aiBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [aiBgColorActiveVar]: vars.colors[`${colorScheme}5`],
        },
      },
    })
  }

  return compoundVariants
}
const getOutlineCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'outline',
        colorScheme,
      },
      style: {
        vars: {
          [aiBorderColorVar]: vars.colors[`${colorScheme}7`],
          [aiBgColorVar]: 'transparent',
          [aiColorVar]: vars.colors[`${colorScheme}11`],
          [aiBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [aiBgColorActiveVar]: vars.colors[`${colorScheme}5`],
        },
      },
    })
  }

  return compoundVariants
}
const getLightCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'default',
        colorScheme,
      },
      style: {
        vars: {
          [aiBorderColorVar]: 'transparent',
          [aiBgColorVar]: vars.colors[`${colorScheme}3`],
          [aiColorVar]: vars.colors[`${colorScheme}11`],
          [aiBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [aiBgColorActiveVar]: vars.colors[`${colorScheme}5`],
        },
      },
    })
  }

  return compoundVariants
}

const _root = recipe({
  base: {
    border: `.0625rem solid ${aiBorderColorVar}`,
    backgroundColor: aiBgColorVar,
    color: aiColorVar,

    ':hover': {
      backgroundColor: aiBgColorHoverVar,
    },

    ':active': {
      backgroundColor: aiBgColorActiveVar,
    },
  base: {},
  variants: {},
  compoundVariants: [],
  },
  variants: {
    variant: {
      subtle: {},
      filled: {},
      outline: {},
      light: {},
      default: {
        vars: {
          [aiBorderColorVar]: vars.colors.gray7,
          [aiBgColorVar]: vars.colors.gray3,
          [aiColorVar]: vars.colors.gray12,
          [aiBgColorHoverVar]: vars.colors.gray4,
          [aiBgColorActiveVar]: vars.colors.gray5,
        },
      },
    },
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
  compoundVariants: [
    ...getFilledCompoundVariants(),
    ...getSubtleCompoundVariants(),
    ...getOutlineCompoundVariants(),
    ...getLightCompoundVariants(),
  ],
})

const root = recipes(_root, focusStyles)

export const classes = {
  root,
}
