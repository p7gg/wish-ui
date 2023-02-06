import { createVar, fallbackVar, globalStyle, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../theme'
import { getVariantClass } from '../utils'

const labelFontSizeVar = createVar()
const switchRadiiVar = createVar()
const switchHeightVar = createVar()
const switchWidthVar = createVar()
const handleSizeVar = createVar()
const trackPaddingVar = createVar()
const innerLabelFontSizeVar = createVar()
const trackLabelPaddingVar = createVar()
const focusRingColorVar = createVar()

const swithBgColorVar = createVar()
const switchBgColorHoverVar = createVar()

const root = recipe({
  base: {
    display: 'inline-flex',
  },
  variants: {
    colorScheme: {
      sky: {
        vars: {
          [swithBgColorVar]: vars.colors.sky9,
          [switchBgColorHoverVar]: vars.colors.sky10,
          [focusRingColorVar]: vars.colors.sky7,
        },
      },
      mint: {
        vars: {
          [swithBgColorVar]: vars.colors.mint9,
          [switchBgColorHoverVar]: vars.colors.mint10,
          [focusRingColorVar]: vars.colors.mint7,
        },
      },
      lime: {
        vars: {
          [swithBgColorVar]: vars.colors.lime9,
          [switchBgColorHoverVar]: vars.colors.lime10,
          [focusRingColorVar]: vars.colors.lime7,
        },
      },
      yellow: {
        vars: {
          [swithBgColorVar]: vars.colors.yellow9,
          [switchBgColorHoverVar]: vars.colors.yellow10,
          [focusRingColorVar]: vars.colors.yellow7,
        },
      },
      amber: {
        vars: {
          [swithBgColorVar]: vars.colors.amber9,
          [switchBgColorHoverVar]: vars.colors.amber10,
          [focusRingColorVar]: vars.colors.amber7,
        },
      },
      gray: {
        vars: {
          [swithBgColorVar]: vars.colors.gray9,
          [switchBgColorHoverVar]: vars.colors.gray10,
          [focusRingColorVar]: vars.colors.gray7,
        },
      },
      mauve: {
        vars: {
          [swithBgColorVar]: vars.colors.mauve9,
          [switchBgColorHoverVar]: vars.colors.mauve10,
          [focusRingColorVar]: vars.colors.mauve7,
        },
      },
      slate: {
        vars: {
          [swithBgColorVar]: vars.colors.slate9,
          [switchBgColorHoverVar]: vars.colors.slate10,
          [focusRingColorVar]: vars.colors.slate7,
        },
      },
      sage: {
        vars: {
          [swithBgColorVar]: vars.colors.sage9,
          [switchBgColorHoverVar]: vars.colors.sage10,
          [focusRingColorVar]: vars.colors.sage7,
        },
      },
      olive: {
        vars: {
          [swithBgColorVar]: vars.colors.olive9,
          [switchBgColorHoverVar]: vars.colors.olive10,
          [focusRingColorVar]: vars.colors.olive7,
        },
      },
      sand: {
        vars: {
          [swithBgColorVar]: vars.colors.sand9,
          [switchBgColorHoverVar]: vars.colors.sand10,
          [focusRingColorVar]: vars.colors.sand7,
        },
      },
      gold: {
        vars: {
          [swithBgColorVar]: vars.colors.gold9,
          [switchBgColorHoverVar]: vars.colors.gold10,
          [focusRingColorVar]: vars.colors.gold7,
        },
      },
      bronze: {
        vars: {
          [swithBgColorVar]: vars.colors.bronze9,
          [switchBgColorHoverVar]: vars.colors.bronze10,
          [focusRingColorVar]: vars.colors.bronze7,
        },
      },
      tomato: {
        vars: {
          [swithBgColorVar]: vars.colors.tomato9,
          [switchBgColorHoverVar]: vars.colors.tomato10,
          [focusRingColorVar]: vars.colors.tomato7,
        },
      },
      red: {
        vars: {
          [swithBgColorVar]: vars.colors.red9,
          [switchBgColorHoverVar]: vars.colors.red10,
          [focusRingColorVar]: vars.colors.red7,
        },
      },
      crimson: {
        vars: {
          [swithBgColorVar]: vars.colors.crimson9,
          [switchBgColorHoverVar]: vars.colors.crimson10,
          [focusRingColorVar]: vars.colors.crimson7,
        },
      },
      pink: {
        vars: {
          [swithBgColorVar]: vars.colors.pink9,
          [switchBgColorHoverVar]: vars.colors.pink10,
          [focusRingColorVar]: vars.colors.pink7,
        },
      },
      plum: {
        vars: {
          [swithBgColorVar]: vars.colors.plum9,
          [switchBgColorHoverVar]: vars.colors.plum10,
          [focusRingColorVar]: vars.colors.plum7,
        },
      },
      purple: {
        vars: {
          [swithBgColorVar]: vars.colors.purple9,
          [switchBgColorHoverVar]: vars.colors.purple10,
          [focusRingColorVar]: vars.colors.purple7,
        },
      },
      violet: {
        vars: {
          [swithBgColorVar]: vars.colors.violet9,
          [switchBgColorHoverVar]: vars.colors.violet10,
          [focusRingColorVar]: vars.colors.violet7,
        },
      },
      indigo: {
        vars: {
          [swithBgColorVar]: vars.colors.indigo9,
          [switchBgColorHoverVar]: vars.colors.indigo10,
          [focusRingColorVar]: vars.colors.indigo7,
        },
      },
      blue: {
        vars: {
          [swithBgColorVar]: vars.colors.blue9,
          [switchBgColorHoverVar]: vars.colors.blue10,
          [focusRingColorVar]: vars.colors.blue7,
        },
      },
      cyan: {
        vars: {
          [swithBgColorVar]: vars.colors.cyan9,
          [switchBgColorHoverVar]: vars.colors.cyan10,
          [focusRingColorVar]: vars.colors.cyan7,
        },
      },
      teal: {
        vars: {
          [swithBgColorVar]: vars.colors.teal9,
          [switchBgColorHoverVar]: vars.colors.teal10,
          [focusRingColorVar]: vars.colors.teal7,
        },
      },
      green: {
        vars: {
          [swithBgColorVar]: vars.colors.green9,
          [switchBgColorHoverVar]: vars.colors.green10,
          [focusRingColorVar]: vars.colors.green7,
        },
      },
      grass: {
        vars: {
          [swithBgColorVar]: vars.colors.grass9,
          [switchBgColorHoverVar]: vars.colors.grass10,
          [focusRingColorVar]: vars.colors.grass7,
        },
      },
      orange: {
        vars: {
          [swithBgColorVar]: vars.colors.orange9,
          [switchBgColorHoverVar]: vars.colors.orange10,
          [focusRingColorVar]: vars.colors.orange7,
        },
      },
      brown: {
        vars: {
          [swithBgColorVar]: vars.colors.brown9,
          [switchBgColorHoverVar]: vars.colors.brown10,
          [focusRingColorVar]: vars.colors.brown7,
        },
      },
    },
    size: {
      xs: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.xs,
          [switchHeightVar]: '1rem',
          [switchWidthVar]: '2rem',
          [handleSizeVar]: '.75rem',
          [innerLabelFontSizeVar]: '.3125rem',
          [trackLabelPaddingVar]: '.25rem',
          [trackPaddingVar]: '.0625rem',
        },
      },
      sm: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.sm,
          [switchHeightVar]: '1.25rem',
          [switchWidthVar]: '2.375rem',
          [handleSizeVar]: '.875rem',
          [innerLabelFontSizeVar]: '.375rem',
          [trackLabelPaddingVar]: '.3125rem',
          [trackPaddingVar]: '.125rem',
        },
      },
      md: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.md,
          [switchHeightVar]: '1.5rem',
          [switchWidthVar]: '2.875rem',
          [handleSizeVar]: '1.125rem',
          [innerLabelFontSizeVar]: '.4375rem',
          [trackLabelPaddingVar]: '.375rem',
          [trackPaddingVar]: '.125rem',
        },
      },
      lg: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.lg,
          [switchHeightVar]: '1.875rem',
          [switchWidthVar]: '3.5rem',
          [handleSizeVar]: '1.375rem',
          [innerLabelFontSizeVar]: '.5625rem',
          [trackLabelPaddingVar]: '.5rem',
          [trackPaddingVar]: '.125rem',
        },
      },
      xl: {
        vars: {
          [labelFontSizeVar]: vars.fontSizes.xl,
          [switchHeightVar]: '2.25rem',
          [switchWidthVar]: '4.5rem',
          [handleSizeVar]: '1.75rem',
          [innerLabelFontSizeVar]: '.6875rem',
          [trackLabelPaddingVar]: '.625rem',
          [trackPaddingVar]: '.125rem',
        },
      },
    },
    radius: {
      xs: {
        vars: {
          [switchRadiiVar]: vars.radii.xs,
        },
      },
      sm: {
        vars: {
          [switchRadiiVar]: vars.radii.sm,
        },
      },
      md: {
        vars: {
          [switchRadiiVar]: vars.radii.md,
        },
      },
      lg: {
        vars: {
          [switchRadiiVar]: vars.radii.lg,
        },
      },
      xl: {
        vars: {
          [switchRadiiVar]: vars.radii.xl,
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
const label = style({
  selectors: {
    '[data-disabled] &': {
      color: vars.colors.gray11,
    },
  },
})
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
const track = style({
  overflow: 'hidden',
  WebkitTapHighlightColor: 'transparent',
  position: 'relative',
  borderRadius: switchRadiiVar,
  backgroundColor: vars.colors.gray3,
  border: `1px solid ${vars.colors.gray7}`,
  height: switchHeightVar,
  minWidth: switchWidthVar,
  margin: 0,
  transitionProperty: 'background-color, border-color',
  transitionTimingFunction: 'ease',
  transitionDuration: '150ms',
  boxSizing: 'border-box',
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  fontSize: innerLabelFontSizeVar,
  color: vars.colors.gray12,
  fontWeight: 600,
  userSelect: 'none',
  MozUserSelect: 'none',
  WebkitUserSelect: 'none',
  zIndex: 0,
  lineHeight: 0,
  transition: `color 150ms ease`,

  selectors: {
    [`${getVariantClass(root, { labelPosition: 'left' })} &`]: {
      order: 2,
    },
    [`${getVariantClass(root, { labelPosition: 'right' })} &`]: {
      order: 1,
    },
    ['&[data-checked]']: {
      backgroundColor: swithBgColorVar,
      borderColor: swithBgColorVar,
      color: vars.colors.white,
      transition: `color 150ms ease`,
    },
    ['&[data-invalid]']: {
      borderColor: vars.colors.red9,
    },
    ['&[data-checked]:hover']: {
      backgroundColor: switchBgColorHoverVar,
    },
    ['&[data-disabled]']: {
      backgroundColor: vars.colors.gray6,
      borderColor: vars.colors.gray7,
      cursor: 'not-allowed',
    },
  },
})
const input = style({})
const thumb = style({
  position: 'absolute',
  zIndex: 1,
  borderRadius: switchRadiiVar,
  boxSizing: 'border-box',
  display: 'flex',
  backgroundColor: vars.colors.white,
  height: handleSizeVar,
  width: handleSizeVar,
  border: `1px solid ${vars.colors.gray7}`,
  left: trackPaddingVar,
  transition: 'left 150ms ease',

  '@media': {
    '(prefers-reduced-motion)': {
      transitionDuration: '0ms',
    },
  },

  selectors: {
    '&[data-checked]': {
      left: calc.subtract('100%', handleSizeVar, trackPaddingVar),
      borderColor: vars.colors.white,
    },
    '&[data-disabled]': {
      borderColor: vars.colors.gray7,
      backgroundColor: vars.colors.gray11,
    },
  },
})

globalStyle(`.${input}:focus + .${track}`, {
  outlineOffset: 2,
  outline: `2px solid ${focusRingColorVar}`,
})
globalStyle(`.${input}:focus:not(:focus-visible) + .${track}`, {
  outline: 'none',
})

export const classes = {
  root,
  labelWrapper,
  label,
  description,
  error,
  input,
  track,
  thumb,
}
