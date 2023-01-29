import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles'

import { vars } from './vars.css'

import type { Simplify } from '../types'

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  dynamicProperties: {
    display: true,
    flexDirection: true,
    alignItems: true,
    justifyContent: true,
    gap: vars.spaces,
    padding: vars.spaces,
    paddingLeft: vars.spaces,
    paddingRight: vars.spaces,
    paddingTop: vars.spaces,
    paddingBottom: vars.spaces,
    width: true,
    height: true,
    borderRadius: vars.radii,
    fontFamily: vars.fonts,
    fontSize: vars.fontSizes,
    lineHeight: vars.lineHeights,
    textAlign: true,
    zIndex: true,
    position: true,
    top: vars.spaces,
    left: vars.spaces,
    right: vars.spaces,
    bottom: vars.spaces,
    verticalAlign: true,
    margin: vars.spaces,
    marginBottom: vars.spaces,
    marginLeft: vars.spaces,
    marginRight: vars.spaces,
    marginTop: vars.spaces,
  },
  staticProperties: {
    display: ['block', 'flex', 'inline-block', 'inline-flex'],
    border: {
      '1x': '1px',
      '2x': '2px',
      '3x': '3px',
    },
  },
  shorthands: {
    p: ['padding'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    placeItems: ['alignItems', 'justifyContent'],
    typeSize: ['fontSize', 'lineHeight'],
    m: ['margin'],
    mr: ['marginRight'],
    ml: ['marginLeft'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
})

const interactiveProperties = defineProperties({
  conditions: {
    base: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'base',
  dynamicProperties: {
    color: vars.colors,
    backgroundColor: vars.colors,
    transform: true,
    transition: true,
    animation: true,
  },
  shorthands: {
    bg: ['backgroundColor'],
  },
})

export const atomicStyles = createRainbowSprinkles(responsiveProperties, interactiveProperties)

type _AtomicStylesProps = Parameters<typeof atomicStyles>[0]
export type AtomicStylesProps = Simplify<_AtomicStylesProps>
