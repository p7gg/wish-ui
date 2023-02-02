import { createVar, fallbackVar, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../theme'

export const transitionDurationVar = createVar()
const labelFontSizeVar = createVar()
const checkBoxSizeVar = createVar()
const iconColorVar = createVar()
const iconSizeVar = createVar()
const checkboxRadiiVar = createVar()
const checkboxBgColorVar = createVar()
const checkboxBgColorHoverVar = createVar()

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
          [iconColorVar]: vars.colors.black,
        },
      },
      mint: {
        vars: {
          [checkboxBgColorVar]: vars.colors.mint9,
          [checkboxBgColorHoverVar]: vars.colors.mint10,
          [iconColorVar]: vars.colors.black,
        },
      },
      lime: {
        vars: {
          [checkboxBgColorVar]: vars.colors.lime9,
          [checkboxBgColorHoverVar]: vars.colors.lime10,
          [iconColorVar]: vars.colors.black,
        },
      },
      yellow: {
        vars: {
          [checkboxBgColorVar]: vars.colors.yellow9,
          [checkboxBgColorHoverVar]: vars.colors.yellow10,
          [iconColorVar]: vars.colors.black,
        },
      },
      amber: {
        vars: {
          [checkboxBgColorVar]: vars.colors.amber9,
          [checkboxBgColorHoverVar]: vars.colors.amber10,
          [iconColorVar]: vars.colors.black,
        },
      },
      gray: {
        vars: {
          [checkboxBgColorVar]: vars.colors.gray9,
          [checkboxBgColorHoverVar]: vars.colors.gray10,
        },
      },
      mauve: {
        vars: {
          [checkboxBgColorVar]: vars.colors.mauve9,
          [checkboxBgColorHoverVar]: vars.colors.mauve10,
        },
      },
      slate: {
        vars: {
          [checkboxBgColorVar]: vars.colors.slate9,
          [checkboxBgColorHoverVar]: vars.colors.slate10,
        },
      },
      sage: {
        vars: {
          [checkboxBgColorVar]: vars.colors.sage9,
          [checkboxBgColorHoverVar]: vars.colors.sage10,
        },
      },
      olive: {
        vars: {
          [checkboxBgColorVar]: vars.colors.olive9,
          [checkboxBgColorHoverVar]: vars.colors.olive10,
        },
      },
      sand: {
        vars: {
          [checkboxBgColorVar]: vars.colors.sand9,
          [checkboxBgColorHoverVar]: vars.colors.sand10,
        },
      },
      gold: {
        vars: {
          [checkboxBgColorVar]: vars.colors.gold9,
          [checkboxBgColorHoverVar]: vars.colors.gold10,
        },
      },
      bronze: {
        vars: {
          [checkboxBgColorVar]: vars.colors.bronze9,
          [checkboxBgColorHoverVar]: vars.colors.bronze10,
        },
      },
      tomato: {
        vars: {
          [checkboxBgColorVar]: vars.colors.tomato9,
          [checkboxBgColorHoverVar]: vars.colors.tomato10,
        },
      },
      red: {
        vars: {
          [checkboxBgColorVar]: vars.colors.red9,
          [checkboxBgColorHoverVar]: vars.colors.red10,
        },
      },
      crimson: {
        vars: {
          [checkboxBgColorVar]: vars.colors.crimson9,
          [checkboxBgColorHoverVar]: vars.colors.crimson10,
        },
      },
      pink: {
        vars: {
          [checkboxBgColorVar]: vars.colors.pink9,
          [checkboxBgColorHoverVar]: vars.colors.pink10,
        },
      },
      plum: {
        vars: {
          [checkboxBgColorVar]: vars.colors.plum9,
          [checkboxBgColorHoverVar]: vars.colors.plum10,
        },
      },
      purple: {
        vars: {
          [checkboxBgColorVar]: vars.colors.purple9,
          [checkboxBgColorHoverVar]: vars.colors.purple10,
        },
      },
      violet: {
        vars: {
          [checkboxBgColorVar]: vars.colors.violet9,
          [checkboxBgColorHoverVar]: vars.colors.violet10,
        },
      },
      indigo: {
        vars: {
          [checkboxBgColorVar]: vars.colors.indigo9,
          [checkboxBgColorHoverVar]: vars.colors.indigo10,
        },
      },
      blue: {
        vars: {
          [checkboxBgColorVar]: vars.colors.blue9,
          [checkboxBgColorHoverVar]: vars.colors.blue10,
        },
      },
      cyan: {
        vars: {
          [checkboxBgColorVar]: vars.colors.cyan9,
          [checkboxBgColorHoverVar]: vars.colors.cyan10,
        },
      },
      teal: {
        vars: {
          [checkboxBgColorVar]: vars.colors.teal9,
          [checkboxBgColorHoverVar]: vars.colors.teal10,
        },
      },
      green: {
        vars: {
          [checkboxBgColorVar]: vars.colors.green9,
          [checkboxBgColorHoverVar]: vars.colors.green10,
        },
      },
      grass: {
        vars: {
          [checkboxBgColorVar]: vars.colors.grass9,
          [checkboxBgColorHoverVar]: vars.colors.grass10,
        },
      },
      orange: {
        vars: {
          [checkboxBgColorVar]: vars.colors.orange9,
          [checkboxBgColorHoverVar]: vars.colors.orange10,
        },
      },
      brown: {
        vars: {
          [checkboxBgColorVar]: vars.colors.brown9,
          [checkboxBgColorHoverVar]: vars.colors.brown10,
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
    [`.${root({ labelPosition: 'left' }).split(' ')[1]} &`]: {
      order: 1,
      paddingRight: vars.spaces.sm,
    },
    [`.${root({ labelPosition: 'right' }).split(' ')[1]} &`]: {
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
  color: vars.colors.gray11,
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
      color: iconColorVar,
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
    '&[data-checked]:hover': {
      backgroundColor: checkboxBgColorHoverVar,
    },
    '&[data-disabled]': {
      backgroundColor: vars.colors.gray6,
      borderColor: vars.colors.gray7,
      cursor: 'not-allowed',
    },
    '&[data-error]': {
      borderColor: vars.colors.red7,
    },
    '&[data-error]:hover': {
      borderColor: vars.colors.red8,
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
