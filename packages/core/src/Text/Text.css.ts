import { createVar, fallbackVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../theme'

export const textLineClampVar = createVar()

const root = recipe({
  base: {
    fontFamily: fallbackVar(vars.fonts.sans, 'sans-serif'),
    WebkitTapHighlightColor: 'transparent',
    lineHeight: vars.lineHeights.normal,
    color: 'inherit',
  },
  variants: {
    clamp: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: textLineClampVar,
        WebkitBoxOrient: 'vertical',
      },
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
    inline: {
      true: {
        lineHeight: 1,
      },
    },
    inherit: {
      true: {
        lineHeight: 'inherit',
        fontWeight: 'inherit',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
    strikeThrough: {
      true: {
        textDecoration: 'line-through',
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        underline: true,
        strikeThrough: true,
      },
      style: {
        textDecoration: 'underline line-through',
      },
    },
  ],
})

export const classes = {
  root,
}
