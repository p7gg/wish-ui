import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../theme'
import { getVariantClass } from '../utils'

export const transitionDurationVar = createVar()
const labelFontSizeVar = createVar()
const checkBoxSizeVar = createVar()
const iconColorVar = createVar()
const iconSizeVar = createVar()
const checkboxRadiiVar = createVar()
const checkboxBgColorVar = createVar()
const checkboxBgColorHoverVar = createVar()
const focusRingColorVar = createVar()

const root = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    colorScheme: {
      sky: {
        vars: {
          [checkboxBgColorVar]: vars.colors.sky9,
          [checkboxBgColorHoverVar]: vars.colors.sky10,
          [focusRingColorVar]: vars.colors.sky7,
          [iconColorVar]: vars.colors.black,
        },
      },
      mint: {
        vars: {
          [checkboxBgColorVar]: vars.colors.mint9,
          [checkboxBgColorHoverVar]: vars.colors.mint10,
          [focusRingColorVar]: vars.colors.mint7,
          [iconColorVar]: vars.colors.black,
        },
      },
      lime: {
        vars: {
          [checkboxBgColorVar]: vars.colors.lime9,
          [checkboxBgColorHoverVar]: vars.colors.lime10,
          [focusRingColorVar]: vars.colors.lime7,
          [iconColorVar]: vars.colors.black,
        },
      },
      yellow: {
        vars: {
          [checkboxBgColorVar]: vars.colors.yellow9,
          [checkboxBgColorHoverVar]: vars.colors.yellow10,
          [focusRingColorVar]: vars.colors.yellow7,
          [iconColorVar]: vars.colors.black,
        },
      },
      amber: {
        vars: {
          [checkboxBgColorVar]: vars.colors.amber9,
          [checkboxBgColorHoverVar]: vars.colors.amber10,
          [focusRingColorVar]: vars.colors.amber7,
          [iconColorVar]: vars.colors.black,
        },
      },
      gray: {
        vars: {
          [checkboxBgColorVar]: vars.colors.gray9,
          [checkboxBgColorHoverVar]: vars.colors.gray10,
          [focusRingColorVar]: vars.colors.gray7,
        },
      },
      mauve: {
        vars: {
          [checkboxBgColorVar]: vars.colors.mauve9,
          [checkboxBgColorHoverVar]: vars.colors.mauve10,
          [focusRingColorVar]: vars.colors.mauve7,
        },
      },
      slate: {
        vars: {
          [checkboxBgColorVar]: vars.colors.slate9,
          [checkboxBgColorHoverVar]: vars.colors.slate10,
          [focusRingColorVar]: vars.colors.slate7,
        },
      },
      sage: {
        vars: {
          [checkboxBgColorVar]: vars.colors.sage9,
          [checkboxBgColorHoverVar]: vars.colors.sage10,
          [focusRingColorVar]: vars.colors.sage7,
        },
      },
      olive: {
        vars: {
          [checkboxBgColorVar]: vars.colors.olive9,
          [checkboxBgColorHoverVar]: vars.colors.olive10,
          [focusRingColorVar]: vars.colors.olive7,
        },
      },
      sand: {
        vars: {
          [checkboxBgColorVar]: vars.colors.sand9,
          [checkboxBgColorHoverVar]: vars.colors.sand10,
          [focusRingColorVar]: vars.colors.sand7,
        },
      },
      gold: {
        vars: {
          [checkboxBgColorVar]: vars.colors.gold9,
          [checkboxBgColorHoverVar]: vars.colors.gold10,
          [focusRingColorVar]: vars.colors.gold7,
        },
      },
      bronze: {
        vars: {
          [checkboxBgColorVar]: vars.colors.bronze9,
          [checkboxBgColorHoverVar]: vars.colors.bronze10,
          [focusRingColorVar]: vars.colors.bronze7,
        },
      },
      tomato: {
        vars: {
          [checkboxBgColorVar]: vars.colors.tomato9,
          [checkboxBgColorHoverVar]: vars.colors.tomato10,
          [focusRingColorVar]: vars.colors.tomato7,
        },
      },
      red: {
        vars: {
          [checkboxBgColorVar]: vars.colors.red9,
          [checkboxBgColorHoverVar]: vars.colors.red10,
          [focusRingColorVar]: vars.colors.red7,
        },
      },
      crimson: {
        vars: {
          [checkboxBgColorVar]: vars.colors.crimson9,
          [checkboxBgColorHoverVar]: vars.colors.crimson10,
          [focusRingColorVar]: vars.colors.crimson7,
        },
      },
      pink: {
        vars: {
          [checkboxBgColorVar]: vars.colors.pink9,
          [checkboxBgColorHoverVar]: vars.colors.pink10,
          [focusRingColorVar]: vars.colors.pink7,
        },
      },
      plum: {
        vars: {
          [checkboxBgColorVar]: vars.colors.plum9,
          [checkboxBgColorHoverVar]: vars.colors.plum10,
          [focusRingColorVar]: vars.colors.plum7,
        },
      },
      purple: {
        vars: {
          [checkboxBgColorVar]: vars.colors.purple9,
          [checkboxBgColorHoverVar]: vars.colors.purple10,
          [focusRingColorVar]: vars.colors.purple7,
        },
      },
      violet: {
        vars: {
          [checkboxBgColorVar]: vars.colors.violet9,
          [checkboxBgColorHoverVar]: vars.colors.violet10,
          [focusRingColorVar]: vars.colors.violet7,
        },
      },
      indigo: {
        vars: {
          [checkboxBgColorVar]: vars.colors.indigo9,
          [checkboxBgColorHoverVar]: vars.colors.indigo10,
          [focusRingColorVar]: vars.colors.indigo7,
        },
      },
      blue: {
        vars: {
          [checkboxBgColorVar]: vars.colors.blue9,
          [checkboxBgColorHoverVar]: vars.colors.blue10,
          [focusRingColorVar]: vars.colors.blue7,
        },
      },
      cyan: {
        vars: {
          [checkboxBgColorVar]: vars.colors.cyan9,
          [checkboxBgColorHoverVar]: vars.colors.cyan10,
          [focusRingColorVar]: vars.colors.cyan7,
        },
      },
      teal: {
        vars: {
          [checkboxBgColorVar]: vars.colors.teal9,
          [checkboxBgColorHoverVar]: vars.colors.teal10,
          [focusRingColorVar]: vars.colors.teal7,
        },
      },
      green: {
        vars: {
          [checkboxBgColorVar]: vars.colors.green9,
          [checkboxBgColorHoverVar]: vars.colors.green10,
          [focusRingColorVar]: vars.colors.green7,
        },
      },
      grass: {
        vars: {
          [checkboxBgColorVar]: vars.colors.grass9,
          [checkboxBgColorHoverVar]: vars.colors.grass10,
          [focusRingColorVar]: vars.colors.grass7,
        },
      },
      orange: {
        vars: {
          [checkboxBgColorVar]: vars.colors.orange9,
          [checkboxBgColorHoverVar]: vars.colors.orange10,
          [focusRingColorVar]: vars.colors.orange7,
        },
      },
      brown: {
        vars: {
          [checkboxBgColorVar]: vars.colors.brown9,
          [checkboxBgColorHoverVar]: vars.colors.brown10,
          [focusRingColorVar]: vars.colors.brown7,
        },
      },
    },
    size: {
      xs: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.xs,
          [checkBoxSizeVar]: '1rem',
          [iconSizeVar]: '.5rem',
        },
      },
      sm: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.sm,
          [checkBoxSizeVar]: '1.25rem',
          [iconSizeVar]: '.625rem',
        },
      },
      md: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.md,
          [checkBoxSizeVar]: '1.5rem',
          [iconSizeVar]: '.875rem',
        },
      },
      lg: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.lg,
          [checkBoxSizeVar]: '1.875rem',
          [iconSizeVar]: '1rem',
        },
      },
      xl: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.xl,
          [checkBoxSizeVar]: '2.25rem',
          [iconSizeVar]: '1.25rem',
        },
      },
    },
    radius: {
      xs: {
        vars: {
          [checkboxRadiiVar]: vars.radii.xs,
        },
      },
      sm: {
        vars: {
          [checkboxRadiiVar]: vars.radii.sm,
        },
      },
      md: {
        vars: {
          [checkboxRadiiVar]: vars.radii.md,
        },
      },
      lg: {
        vars: {
          [checkboxRadiiVar]: vars.radii.lg,
        },
      },
      xl: {
        vars: {
          [checkboxRadiiVar]: vars.radii.xl,
        },
      },
    },
    labelPosition: {
      left: {},
      right: {},
    },
  },
})
const labelWrapper = style({
  fontFamily: fallbackVar(vars.fonts.sans, 'sans-serif'),
  display: 'inline-flex',
  flexDirection: 'column',
  WebkitTapHighlightColor: 'transparent',
  fontSize: labelFontSizeVar,

  selectors: {
    [`${getVariantClass(root, { labelPosition: 'left' })} &`]: {
      order: 1,
      paddingRight: vars.spaces.sm,
    },
    [`${getVariantClass(root, { labelPosition: 'right' })} &`]: {
      order: 2,
      paddingLeft: vars.spaces.sm,
    },
  },
})
const label = style({})
const description = style({
  wordBreak: 'break-word',
  color: vars.colors.gray11,
  fontSize: calc.subtract(labelFontSizeVar, '2px'),
  lineHeight: 1.2,
  display: 'block',
})
const error = style({
  wordBreak: 'break-word',
  color: vars.colors.red9,
  fontSize: calc.subtract(labelFontSizeVar, '2px'),
  lineHeight: 1.2,
  display: 'block',
})
const icon = style({
  color: 'inherit',
  transform: 'translateY(5px) scale(0.5)',
  opacity: 0,
  transitionProperty: 'opacity, transform',
  transitionTimingFunction: 'ease',
  transitionDuration: transitionDurationVar,
  pointerEvents: 'none',
  width: iconSizeVar,
  position: 'absolute',
  zIndex: 1,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: 'auto',

  '@media': {
    '(prefers-reduced-motion)': {
      transitionDuration: '0ms',
    },
  },

  selectors: {
    [`[data-indeterminate] &`]: {
      transform: 'none',
      opacity: 1,
    },
    '[data-checked] &': {
      color: vars.colors.white,
      opacity: 1,
      transform: 'translateY(0) scale(1)',
    },
    '[data-disabled] &': {
      color: vars.colors.gray11,
    },
  },
})
const control = style({
  position: 'relative',
  width: checkBoxSizeVar,
  height: checkBoxSizeVar,
  appearance: 'none',
  backgroundColor: vars.colors.gray3,
  border: `1px solid ${vars.colors.gray7}`,
  borderRadius: checkboxRadiiVar,
  padding: 0,
  display: 'inline-flex',
  margin: 0,
  transition: `border-color ${transitionDurationVar} ease, background-color ${transitionDurationVar} ease`,
  WebkitTapHighlightColor: 'transparent',

  ':hover': {
    backgroundColor: vars.colors.gray4,
    borderColor: vars.colors.gray8,
  },

  ':active': {
    backgroundColor: vars.colors.gray5,
  },

  selectors: {
    [`.${root({ labelPosition: 'left' }).split(' ')[1]} &`]: {
      order: 2,
    },
    [`.${root({ labelPosition: 'right' }).split(' ')[1]} &`]: {
      order: 1,
    },
    '&[data-checked]': {
      backgroundColor: checkboxBgColorVar,
      borderColor: checkboxBgColorVar,
    },
    '&[data-checked]:not([data-disabled]):hover': {
      backgroundColor: checkboxBgColorHoverVar,
    },
    '&[data-disabled]': {
      backgroundColor: vars.colors.gray6,
      borderColor: vars.colors.gray7,
      cursor: 'not-allowed',
    },
    '&[data-invalid]': {
      borderColor: vars.colors.red7,
    },
    '&[data-invalid]:hover': {
      borderColor: vars.colors.red8,
    },
    'input:focus + &': {
      outlineOffset: '.125rem',
      outline: `.125rem solid ${focusRingColorVar}`,
    },
    'input:focus:not(:focus-visible) + &': {
      outline: 'none',
    },
  },
})

export const classes = {
  root,
  labelWrapper,
  label,
  description,
  error,
  icon,
  control,
}
