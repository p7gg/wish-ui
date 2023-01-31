import { createVar } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../theme'

import { _root as buttonRoot, buttonHeightVar } from '../Button/Button.css'

const loaderSizeVar = createVar()
const loaderColorSchemeVar = createVar()

const root = recipe({
  base: {
    display: 'block',

    selectors: {
      [`.${buttonRoot()} &`]: {
        vars: {
          [loaderSizeVar]: calc.divide(buttonHeightVar, 2),
        },
      },
    },
  },
  variants: {
    variant: {
      bars: {
        width: loaderSizeVar,
        fill: loaderColorSchemeVar,
      },
      oval: {
        width: loaderSizeVar,
        height: loaderSizeVar,
        stroke: loaderColorSchemeVar,
      },
      dots: {
        width: loaderSizeVar,
        height: `calc(${loaderSizeVar} / 4)`,
        fill: loaderColorSchemeVar,
      },
    },
    colorScheme: {
      gray: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.gray9,
        },
      },
      mauve: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.mauve9,
        },
      },
      slate: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.slate9,
        },
      },
      sage: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.sage9,
        },
      },
      olive: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.olive9,
        },
      },
      sand: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.sand9,
        },
      },
      tomato: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.tomato9,
        },
      },
      red: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.red9,
        },
      },
      crimson: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.crimson9,
        },
      },
      pink: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.pink9,
        },
      },
      plum: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.plum9,
        },
      },
      purple: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.purple9,
        },
      },
      violet: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.violet9,
        },
      },
      indigo: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.indigo9,
        },
      },
      blue: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.blue9,
        },
      },
      cyan: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.cyan9,
        },
      },
      teal: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.teal9,
        },
      },
      green: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.green9,
        },
      },
      grass: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.grass9,
        },
      },
      brown: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.brown9,
        },
      },
      orange: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.orange9,
        },
      },
      sky: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.sky9,
        },
      },
      mint: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.mint9,
        },
      },
      lime: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.lime9,
        },
      },
      yellow: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.yellow9,
        },
      },
      amber: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.amber9,
        },
      },
      gold: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.gold9,
        },
      },
      bronze: {
        vars: {
          [loaderColorSchemeVar]: vars.colors.bronze9,
        },
      },
      currentColor: {
        vars: {
          [loaderColorSchemeVar]: 'currentColor',
        },
      },
    },
    size: {
      xs: {
        vars: {
          [loaderSizeVar]: '18px',
        },
      },
      sm: {
        vars: {
          [loaderSizeVar]: '22px',
        },
      },
      md: {
        vars: {
          [loaderSizeVar]: '36px',
        },
      },
      lg: {
        vars: {
          [loaderSizeVar]: '44px',
        },
      },
      xl: {
        vars: {
          [loaderSizeVar]: '58px',
        },
      },
    },
  },
})

export const classes = { root }
