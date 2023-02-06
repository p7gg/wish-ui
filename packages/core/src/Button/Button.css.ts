import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { recipe } from '@vanilla-extract/recipes'

import { isBrightColor, wishColors, wishSizes } from '../constants'
import { vars } from '../theme'
import { getVariantClass, withColorMode } from '../utils'

import { classes as buttonGroupClasses } from './ButtonGroup/ButtonGroup.css'

import type { CompoundVariant } from '../types'

export const buttonHeightVar = createVar()
export const buttonGroupBorderWidthVar = createVar()
const buttonPaddingX = createVar()
const buttonRadiiVar = createVar()
const buttonBgColorVar = createVar()
const buttonColorVar = createVar()
const buttonBgColorHoverVar = createVar()
const buttonBgColorActiveVar = createVar()
const buttonBorderColorVar = createVar()
const buttonFocusRingColorVar = createVar()
const compactSizes = {
  xs: { height: '1.375rem', paddingX: '.4375rem' },
  sm: { height: '1.625rem', paddingX: '.5rem' },
  md: { height: '1.875rem', paddingX: '.625rem' },
  lg: { height: '2.125rem', paddingX: '.75rem' },
  xl: { height: '2.5rem', paddingX: '.875rem' },
} as const

const getCompactCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const size of wishSizes) {
    compoundVariants.push({
      variants: {
        size,
        compact: true,
      },
      style: {
        vars: {
          [buttonHeightVar]: compactSizes[size].height,
          [buttonPaddingX]: compactSizes[size].paddingX,
        },
      },
    })
  }

  return compoundVariants
}
const getFilledCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        colorScheme,
        variant: 'filled',
      },
      style: {
        vars: {
          [buttonBgColorVar]: vars.colors[`${colorScheme}9`],
          [buttonColorVar]: isBrightColor(colorScheme) ? vars.colors.black : vars.colors.white,
          [buttonBorderColorVar]: 'transparent',
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}10`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}10`],
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
        variant: 'light',
        colorScheme,
      },
      style: {
        vars: {
          [buttonBorderColorVar]: 'transparent',
          [buttonBgColorVar]: vars.colors[`${colorScheme}3`],
          [buttonColorVar]: vars.colors[`${colorScheme}11`],
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}5`],
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
        variant: 'subtle',
        colorScheme,
      },
      style: {
        vars: {
          [buttonBorderColorVar]: 'transparent',
          [buttonBgColorVar]: 'transparent',
          [buttonColorVar]: vars.colors[`${colorScheme}11`],
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}5`],
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
          [buttonBorderColorVar]: vars.colors[`${colorScheme}7`],
          [buttonBgColorVar]: 'transparent',
          [buttonColorVar]: vars.colors[`${colorScheme}11`],
          [buttonBgColorHoverVar]: vars.colors[`${colorScheme}4`],
          [buttonBgColorActiveVar]: vars.colors[`${colorScheme}5`],
        },
      },
    })
  }

  return compoundVariants
}

export const root = recipe({
  base: {
    height: buttonHeightVar,
    paddingLeft: buttonPaddingX,
    paddingRight: buttonPaddingX,
    borderRadius: buttonRadiiVar,
    backgroundColor: buttonBgColorVar,
    color: buttonColorVar,
    border: `.0625rem solid ${buttonBorderColorVar}`,
    fontFamily: fallbackVar(vars.fonts.sans, 'sans-serif'),
    fontWeight: fallbackVar(vars.fontWeights.semibold, '600'),
    display: 'inline-block',
    width: 'auto',
    position: 'relative',
    lineHeight: 1,
    userSelect: 'none',
    cursor: 'pointer',
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

    ':focus': {
      outlineOffset: 2,
      outline: `.125rem solid ${buttonFocusRingColorVar}`,
    },

    selectors: {
      '&[data-disabled], &:disabled': {
        borderColor: 'transparent',
        backgroundColor: vars.colors.gray6,
        color: vars.colors.gray11,
        cursor: 'not-allowed',
        backgroundImage: 'none',
        pointerEvents: 'none',
      },
      '&[data-disabled]:active, &:disabled:active': {
        transform: 'none',
      },
      ['&:focus:not(:focus-visible)']: {
        outline: 'none',
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
          [buttonColorVar]: vars.colors.gray12,
          [buttonBgColorHoverVar]: vars.colors.gray4,
          [buttonBgColorActiveVar]: vars.colors.gray5,
        },
      },
    },
    size: {
      xs: {
        fontSize: vars.fontSizes.xs,
        vars: {
          [buttonHeightVar]: '1.875rem',
          [buttonPaddingX]: '.875rem',
        },
      },
      sm: {
        fontSize: vars.fontSizes.sm,
        vars: {
          [buttonHeightVar]: '2.25rem',
          [buttonPaddingX]: '1.125rem',
        },
      },
      md: {
        fontSize: vars.fontSizes.md,
        vars: {
          [buttonHeightVar]: '2.625rem',
          [buttonPaddingX]: '1.375rem',
        },
      },
      lg: {
        fontSize: vars.fontSizes.lg,
        vars: {
          [buttonHeightVar]: '3.125rem',
          [buttonPaddingX]: '1.625rem',
        },
      },
      xl: {
        fontSize: vars.fontSizes.xl,
        vars: {
          [buttonHeightVar]: '3.75rem',
          [buttonPaddingX]: '2rem',
        },
      },
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
    colorScheme: {
      sky: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.sky7,
        },
      },
      mint: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.mint7,
        },
      },
      lime: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.lime7,
        },
      },
      yellow: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.yellow7,
        },
      },
      amber: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.amber7,
        },
      },
      gray: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.gray7,
        },
      },
      mauve: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.mauve7,
        },
      },
      slate: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.slate7,
        },
      },
      sage: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.sage7,
        },
      },
      olive: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.olive7,
        },
      },
      sand: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.sand7,
        },
      },
      gold: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.gold7,
        },
      },
      bronze: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.bronze7,
        },
      },
      tomato: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.tomato7,
        },
      },
      red: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.red7,
        },
      },
      crimson: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.crimson7,
        },
      },
      pink: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.pink7,
        },
      },
      plum: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.plum7,
        },
      },
      purple: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.purple7,
        },
      },
      violet: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.violet7,
        },
      },
      indigo: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.indigo7,
        },
      },
      blue: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.blue7,
        },
      },
      cyan: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.cyan7,
        },
      },
      teal: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.teal7,
        },
      },
      green: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.green7,
        },
      },
      grass: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.grass7,
        },
      },
      orange: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.orange7,
        },
      },
      brown: {
        vars: {
          [buttonFocusRingColorVar]: vars.colors.brown7,
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
    fullWidth: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
    withLeftIcon: {
      true: {
        paddingLeft: calc.divide(buttonPaddingX, 1.5),
      },
    },
    withRightIcon: {
      true: {
        paddingRight: calc.divide(buttonPaddingX, 1.5),
      },
    },
    groupOrientation: {
      vertical: {
        ':first-of-type': {
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomWidth: calc.divide(buttonGroupBorderWidthVar, 2),
        },

        ':last-of-type': {
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderTopWidth: calc.divide(buttonGroupBorderWidthVar, 2),
        },

        selectors: {
          '&:not(:first-of-type):not(:last-of-type)': {
            borderRadius: 0,
            borderTopWidth: calc.divide(buttonGroupBorderWidthVar, 2),
            borderBottomWidth: calc.divide(buttonGroupBorderWidthVar, 2),
          },
        },
      },
      horizontal: {
        ':first-of-type': {
          borderBottomRightRadius: 0,
          borderTopRightRadius: 0,
          borderRightWidth: calc.divide(buttonGroupBorderWidthVar, 2),
        },

        ':last-of-type': {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderLeftWidth: calc.divide(buttonGroupBorderWidthVar, 2),
        },

        selectors: {
          '&:not(:first-of-type):not(:last-of-type)': {
            borderRadius: 0,
            borderLeftWidth: calc.divide(buttonGroupBorderWidthVar, 2),
            borderRightWidth: calc.divide(buttonGroupBorderWidthVar, 2),
          },
        },
      },
    },
  },
  compoundVariants: [
    ...getCompactCompoundVariants(),
    ...getFilledCompoundVariants(),
    ...getLightCompoundVariants(),
    ...getSubtleCompoundVariants(),
    ...getOutlineCompoundVariants(),
  ],
})

const inner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  overflow: 'visible',
})
const label = style({
  whiteSpace: 'nowrap',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',

  selectors: {
    [`${getVariantClass(root, { uppercase: true })} &`]: {
      textTransform: 'uppercase',
    },
  },
})
const _icon = style({
  display: 'flex',
  alignItems: 'center',
})
const leftIcon = style([
  _icon,
  {
    marginRight: '.625rem',
  },
])
const rightIcon = style([
  _icon,
  {
    marginLeft: '.625rem',
  },
])
const centerLoader = style({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  opacity: 0.5,
})

globalStyle(`.${buttonGroupClasses.root.vertical} .${root()} + .${root()}`, {
  marginTop: calc(buttonGroupBorderWidthVar).negate().toString(),
})
globalStyle(`.${buttonGroupClasses.root.horizontal} .${root()} + .${root()}`, {
  marginLeft: calc(buttonGroupBorderWidthVar).negate().toString(),
})

export const classes = {
  root,
  inner,
  label,
  leftIcon,
  rightIcon,
  centerLoader,
}
