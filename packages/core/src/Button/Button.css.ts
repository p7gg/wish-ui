import { createVar, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { isBrightColor, wishColors, wishSizes } from '../constants'
import { focusStyles } from '../css'
import { vars } from '../theme'
import { recipes, withColorMode } from '../utils'

import type { CompoundVariant } from '../types'

export const buttonHeightVar = createVar()
const buttonPaddingLVar = createVar()
const buttonPaddingRVar = createVar()
const buttonRadiiVar = createVar()
const buttonFontSizeVar = createVar()
const buttonBorderColorVar = createVar()
const buttonBgColorVar = createVar()
const buttonTextColorVar = createVar()
const buttonBgColorHoverVar = createVar()
const buttonBgColorActiveVar = createVar()

const sizes = {
  xs: { height: '30px', paddingLeft: '14px', paddingRight: '14px' },
  sm: { height: '36px', paddingLeft: '18px', paddingRight: '18px' },
  md: { height: '42px', paddingLeft: '22px', paddingRight: '22px' },
  lg: { height: '50px', paddingLeft: '26px', paddingRight: '26px' },
  xl: { height: '60px', paddingLeft: '32px', paddingRight: '32px' },
  'compact-xs': { height: '22px', paddingLeft: '7px', paddingRight: '7px' },
  'compact-sm': { height: '26px', paddingLeft: '8px', paddingRight: '8px' },
  'compact-md': { height: '30px', paddingLeft: '10px', paddingRight: '10px' },
  'compact-lg': { height: '34px', paddingLeft: '12px', paddingRight: '12px' },
  'compact-xl': { height: '40px', paddingLeft: '14px', paddingRight: '14px' },
} as const
const getCompactSizeCompoundVariants = (compact: boolean) => {
  const compoundVariants: CompoundVariant[] = []

  for (const size of wishSizes) {
    compoundVariants.push({
      variants: { compact, size },
      style: {
        vars: {
          [buttonHeightVar]: compact ? sizes[`compact-${size}`].height : sizes[size].height,
          [buttonPaddingLVar]: compact
            ? sizes[`compact-${size}`].paddingLeft
            : sizes[size].paddingLeft,
          [buttonPaddingRVar]: compact
            ? sizes[`compact-${size}`].paddingRight
            : sizes[size].paddingRight,
          [buttonFontSizeVar]: vars.fontSizes[size],
        },
      },
    })
  }

  return compoundVariants
}
const getFilledColorCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'filled',
        colorScheme,
      },
      style: {
        vars: {
          [buttonBorderColorVar]: 'transparent',
          [buttonBgColorVar]: vars.colors[`${colorScheme}9`],
          [buttonTextColorVar]: isBrightColor(colorScheme) ? vars.colors.black : vars.colors.white,
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}10`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}10`],
        },
      },
    })
  }

  return compoundVariants
}
const getLightColorCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'light',
        colorScheme,
      },
      style: {
        vars: {
          [buttonBorderColorVar]: 'transparent',
          [buttonBgColorVar]: vars.colors[`${colorScheme}3`],
          [buttonTextColorVar]: vars.colors[`${colorScheme}11`],
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}5`],
        },
      },
    })
  }

  return compoundVariants
}
const getSubtleColorCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'subtle',
        colorScheme,
      },
      style: {
        vars: {
          [buttonBorderColorVar]: 'transparent',
          [buttonBgColorVar]: 'transparent',
          [buttonTextColorVar]: vars.colors[`${colorScheme}11`],
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}5`],
        },
      },
    })
  }

  return compoundVariants
}
const getOutlineColorCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'outline',
        colorScheme,
      },
      style: {
        vars: {
          [buttonBorderColorVar]: vars.colors[`${colorScheme}7`],
          [buttonBgColorVar]: 'transparent',
          [buttonTextColorVar]: vars.colors[`${colorScheme}11`],
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}5`],
        },
      },
    })
  }

  return compoundVariants
}

const root = recipe({
  base: {
    height: buttonHeightVar,
    paddingLeft: buttonPaddingLVar,
    paddingRight: buttonPaddingRVar,
    borderRadius: buttonRadiiVar,
    fontFamily: vars.fonts.sans,
    fontWeight: vars.fontWeights.semibold,
    fontSize: buttonFontSizeVar,
    border: `1px solid ${buttonBorderColorVar}`,
    backgroundColor: buttonBgColorVar,
    color: buttonTextColorVar,
    width: 'auto',
    display: 'inline-block',
    position: 'relative',
    userSelect: 'none',
    cursor: 'pointer',
    lineHeight: 1,
    appearance: 'none',
    textAlign: 'left',
    textDecoration: 'none',
    boxSizing: 'border-box',

    ':hover': {
      backgroundColor: buttonBgColorHoverVar,
    },

    ':active': {
      transform: 'translateY(1px)',
      backgroundColor: buttonBgColorActiveVar,
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
      filled: {},
      light: {},
      subtle: {},
      outline: {},
      default: {
        vars: {
          [buttonBorderColorVar]: vars.colors.gray7,
          [buttonBgColorVar]: vars.colors.gray3,
          [buttonTextColorVar]: vars.colors.gray12,
          [buttonBgColorHoverVar]: vars.colors.gray4,
          [buttonBgColorActiveVar]: vars.colors.gray5,
        },
      },
    },
    colorScheme: {
      gray: {},
      mauve: {},
      slate: {},
      sage: {},
      olive: {},
      sand: {},
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
      brown: {},
      orange: {},
      sky: {},
      mint: {},
      lime: {},
      yellow: {},
      amber: {},
      gold: {},
      bronze: {},
    },
    size: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
    radius: {
      xs: {
        vars: {
          [buttonRadiiVar]: vars.radii.xs,
        },
      },
      sm: {
        vars: {
          [buttonRadiiVar]: vars.radii.sm,
        },
      },
      md: {
        vars: {
          [buttonRadiiVar]: vars.radii.md,
        },
      },
      lg: {
        vars: {
          [buttonRadiiVar]: vars.radii.lg,
        },
      },
      xl: {
        vars: {
          [buttonRadiiVar]: vars.radii.xl,
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
        display: 'block',
      },
    },
    loading: {
      true: {
        pointerEvents: 'none',

        '::before': {
          content: '""',
          position: 'absolute',
          inset: -1,
          backgroundColor: 'hsla(0, 0%, 100%, .5)',
          borderRadius: buttonRadiiVar,
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
    compact: {
      true: {},
    },
    uppercase: {
      true: {},
    },
    withLeftIcon: {
      true: {
        paddingLeft: `calc(${buttonPaddingLVar} / 1.5)`,
      },
    },
    withRightIcon: {
      true: {
        paddingRight: `calc(${buttonPaddingRVar} / 1.5)`,
      },
    },
  },
  compoundVariants: [
    ...getCompactSizeCompoundVariants(false),
    ...getCompactSizeCompoundVariants(true),
    ...getFilledColorCompoundVariants(),
    ...getLightColorCompoundVariants(),
    ...getSubtleColorCompoundVariants(),
    ...getOutlineColorCompoundVariants(),
  ],
})

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  overflow: 'visible',
})
export const label = style({
  whiteSpace: 'nowrap',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',

  selectors: {
    [`${root({ uppercase: true }).split(' ')[1]} &`]: {
      textTransform: 'uppercase',
    },
  },
})
const icon = style({
  display: 'flex',
  alignItems: 'center',
})

export const leftIcon = style([
  icon,
  {
    marginRight: 10,
  },
])
export const rightIcon = style([
  icon,
  {
    marginLeft: 10,
  },
])
export const centerLoader = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  opacity: 0.5,
})

export const button = recipes(root, focusStyles)
