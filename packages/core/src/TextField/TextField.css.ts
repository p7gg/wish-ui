import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { recipe } from '@vanilla-extract/recipes'

import { wishColors } from '../constants'
import { vars } from '../theme'
import { getVariantClass } from '../utils'

import type { CompoundVariant } from '../types'

export const inputRightSectionWidthVar = createVar()
export const inputIconWidthVar = createVar()
const inputSizeVar = createVar()
const inputFontSizeVar = createVar()
const inputRadiiVar = createVar()

//
const inputValidBorderColorVar = createVar()
const inputValidBorderColorHoverVar = createVar()
const inputValidBorderColorFocusVar = createVar()
const inputValidBgColor = createVar()

const getDefaultCompoundVariants = () => {
  const compoundVariants: CompoundVariant[] = []

  for (const colorScheme of wishColors) {
    compoundVariants.push({
      variants: {
        variant: 'default',
        colorScheme,
      },
      style: {
        vars: {
          [inputValidBorderColorFocusVar]: vars.colors[`${colorScheme}9`],
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
        variant: 'filled',
        colorScheme,
      },
      style: {
        vars: {
          [inputValidBorderColorFocusVar]: vars.colors[`${colorScheme}9`],
        },
      },
    })
  }

  return compoundVariants
}

const root = recipe({
  base: {},
  variants: {
    variant: {
      default: {
        vars: {
          [inputValidBorderColorVar]: vars.colors.gray7,
          [inputValidBorderColorHoverVar]: vars.colors.gray8,
          [inputValidBgColor]: vars.colors.gray3,
        },
      },
      filled: {
        vars: {
          [inputValidBorderColorVar]: 'transparent',
          [inputValidBorderColorHoverVar]: 'transparent',
          [inputValidBgColor]: vars.colors.gray4,
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
      xs: {
        vars: {
          [inputSizeVar]: '1.875rem',
          [inputFontSizeVar]: vars.fontSizes.xs,
        },
      },
      sm: {
        vars: {
          [inputSizeVar]: '2.25rem',
          [inputFontSizeVar]: vars.fontSizes.sm,
        },
      },
      md: {
        vars: {
          [inputSizeVar]: '2.625rem',
          [inputFontSizeVar]: vars.fontSizes.md,
        },
      },
      lg: {
        vars: {
          [inputSizeVar]: '3.125rem',
          [inputFontSizeVar]: vars.fontSizes.lg,
        },
      },
      xl: {
        vars: {
          [inputSizeVar]: '3.75rem',
          [inputFontSizeVar]: vars.fontSizes.xl,
        },
      },
    },
    radius: {
      xs: {
        vars: {
          [inputRadiiVar]: vars.radii.xs,
        },
      },
      sm: {
        vars: {
          [inputRadiiVar]: vars.radii.sm,
        },
      },
      md: {
        vars: {
          [inputRadiiVar]: vars.radii.md,
        },
      },
      lg: {
        vars: {
          [inputRadiiVar]: vars.radii.lg,
        },
      },
      xl: {
        vars: {
          [inputRadiiVar]: vars.radii.xl,
        },
      },
    },
    offsetTop: { true: {} },
    offsetBottom: { true: {} },
    withIcon: { true: {} },
    withRightSection: { true: {} },
  },
  compoundVariants: [...getDefaultCompoundVariants(), ...getFilledCompoundVariants()],
})
const inputWrapper = style({
  position: 'relative',

  selectors: {
    [`${getVariantClass(root, { offsetTop: true })} &`]: {
      marginTop: calc.divide(vars.spaces.xs, 2),
    },
    [`${getVariantClass(root, { offsetBottom: true })} &`]: {
      marginBottom: calc.divide(vars.spaces.xs, 2),
    },
  },
})
const input = style({
  fontFamily: fallbackVar(vars.fonts.sans, 'sans-serif'),
  height: inputSizeVar,
  WebkitTapHighlightColor: 'transparent',
  lineHeight: calc.subtract(inputSizeVar, '2px'),
  appearance: 'none',
  resize: 'none',
  boxSizing: 'border-box',
  fontSize: inputFontSizeVar,
  width: '100%',
  color: vars.colors.gray12,
  display: 'block',
  textAlign: 'left',
  minHeight: inputSizeVar,
  paddingLeft: calc.divide(inputSizeVar, 3),
  paddingRight: calc.divide(inputSizeVar, 3),
  borderRadius: inputRadiiVar,
  border: `1px solid ${inputValidBorderColorVar}`,
  transition: 'border-color 100ms ease',
  backgroundColor: inputValidBgColor,

  ':hover': {
    borderColor: inputValidBorderColorHoverVar,
  },

  '::placeholder': {
    userSelect: 'none',
    color: vars.colors.gray10,
  },

  selectors: {
    [`${getVariantClass(root, { withIcon: true })} &`]: {
      // paddingLeft: inputSizeVar,
      paddingLeft: fallbackVar(inputIconWidthVar, inputSizeVar),
    },
    [`${getVariantClass(root, { withRightSection: true })} &`]: {
      // paddingRight: inputSizeVar,
      paddingRight: fallbackVar(inputRightSectionWidthVar, '2.25rem'),
    },
    '&[data-disabled], &:disabled': {
      backgroundColor: vars.colors.gray6,
      color: vars.colors.gray11,
      opacity: 0.6,
      cursor: 'not-allowed',
    },
    '&[data-disabled]::placeholder, &:disabled::placeholder': {
      color: vars.colors.gray10,
    },
    '&[data-invalid]': {
      borderColor: vars.colors.red9,
      color: vars.colors.red11,
    },
    '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
      {
        appearance: 'none',
      },
    '&[type=number]': {
      MozAppearance: 'textfield',
    },
    '&:focus, &:focus-within': {
      outline: 'none',
    },
    '&:focus:not([data-invalid]), &:focus-within:not([data-invalid])': {
      borderColor: inputValidBorderColorFocusVar,
    },
  },
})
const label = style({
  display: 'inline-block',
  fontSize: inputFontSizeVar,
  fontWeight: 500,
  color: vars.colors.gray12,
  wordBreak: 'break-word',
  cursor: 'default',
  WebkitTapHighlightColor: 'transparent',
})
const description = style({
  wordBreak: 'break-word',
  color: vars.colors.gray11,
  fontSize: calc.subtract(inputFontSizeVar, '2px'),
  lineHeight: 1.2,
  display: 'block',
})
const error = style({
  wordBreak: 'break-word',
  color: vars.colors.red11,
  fontSize: calc.subtract(inputFontSizeVar, '2px'),
  lineHeight: 1.2,
  display: 'block',
})
const icon = style({
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: fallbackVar(inputIconWidthVar, inputSizeVar),
  color: vars.colors.gray11,

  selectors: {
    '[data-invalid] &': {
      color: vars.colors.red11,
    },
  },
})
const rightSection = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: fallbackVar(inputRightSectionWidthVar, '2.25rem'),
})

export const classes = {
  root,
  inputWrapper,
  input,
  label,
  description,
  error,
  icon,
  rightSection,
}
