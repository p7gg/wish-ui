import { createVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { isBrightColor, wishColors } from '../constants'
import { focusStyles } from '../css'
import { vars } from '../theme'
import { recipes, withColorMode } from '../utils'

import type { CompoundVariant } from '../types'

export const aiSizeVar = createVar()
const aiBorderColorVar = createVar()
const aiBgColorVar = createVar()
const aiColorVar = createVar()
const aiBgColorHoverVar = createVar()
const aiBgColorActiveVar = createVar()
const aiRadiiVar = createVar()

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

export const _root = recipe({
  base: {
    border: `.0625rem solid ${aiBorderColorVar}`,
    backgroundColor: aiBgColorVar,
    color: aiColorVar,
    height: aiSizeVar,
    minHeight: aiSizeVar,
    width: aiSizeVar,
    minWidth: aiSizeVar,
    borderRadius: aiRadiiVar,
    position: 'relative',
    padding: 0,
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
      backgroundColor: aiBgColorHoverVar,
    },

    ':active': {
      transform: 'translateY(1px)',
      backgroundColor: aiBgColorActiveVar,
    },

    ':disabled': {
      borderColor: 'transparent',
      backgroundColor: vars.colors.gray3,
      color: vars.colors.gray11,
      cursor: 'not-allowed',
      backgroundImage: 'none',
      pointerEvents: 'none',
    },

    selectors: {
      '&:disabled:active': {
        transform: 'none',
      },
    },
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
    size: {
      xs: {
        vars: {
          [aiSizeVar]: '1.125rem',
        },
      },
      sm: {
        vars: {
          [aiSizeVar]: '1.375rem',
        },
      },
      md: {
        vars: {
          [aiSizeVar]: '1.75rem',
        },
      },
      lg: {
        vars: {
          [aiSizeVar]: '2.125rem',
        },
      },
      xl: {
        vars: {
          [aiSizeVar]: '2.75rem',
        },
      },
    },
    radius: {
      xs: {
        vars: {
          [aiRadiiVar]: vars.radii.xs,
        },
      },
      sm: {
        vars: {
          [aiRadiiVar]: vars.radii.sm,
        },
      },
      md: {
        vars: {
          [aiRadiiVar]: vars.radii.md,
        },
      },
      lg: {
        vars: {
          [aiRadiiVar]: vars.radii.lg,
        },
      },
      xl: {
        vars: {
          [aiRadiiVar]: vars.radii.xl,
        },
      },
    },
    loading: {
      true: {
        pointerEvents: 'none',

        ':before': {
          content: '""',
          position: 'absolute',
          inset: -1,
          backgroundColor: 'hsla(0, 0%, 100%, .5)',
          borderRadius: aiRadiiVar,
          cursor: 'not-allowed',
        },

        selectors: {
          ...withColorMode(
            {
              dark: {
                backgroundColor: 'hsla(225, 7%, 11%, .5)',
              },
            },
            '&::before',
          ),
        },
      },
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
