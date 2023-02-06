import { createRainbowSprinkles, defineProperties } from 'rainbow-sprinkles'

import { vars } from './vars.css'

import type { Simplify } from '../types'

const responsiveProperties = defineProperties({
  conditions: {
    base: {},
    xs: { '@media': 'screen and (min-width: 640px)' },
    sm: { '@media': 'screen and (min-width: 768px)' },
    md: { '@media': 'screen and (min-width: 1024px)' },
    lg: { '@media': 'screen and (min-width: 1280px)' },
    xl: { '@media': 'screen and (min-width: 1536px)' },
  },
  defaultCondition: 'base',
  dynamicProperties: {
    /** The **`display`** CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex. */
    display: true,

    /** The **`flex-direction`** CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed). */
    flexDirection: true,

    /** The CSS **`align-items`** property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area. */
    alignItems: true,

    /** The CSS **`justify-content`** property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container. */
    justifyContent: true,

    /** The **`gap`** CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`. */
    gap: vars.spaces,

    /** The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once. */
    padding: vars.spaces,

    /** The **`padding-left`** CSS property sets the width of the padding area to the left of an element. */
    paddingLeft: vars.spaces,

    /** The **`padding-right`** CSS property sets the width of the padding area on the right of an element. */
    paddingRight: vars.spaces,

    /** The **`padding-top`** CSS property sets the height of the padding area on the top of an element. */
    paddingTop: vars.spaces,

    /** The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element. */
    paddingBottom: vars.spaces,

    /** The **`width`** CSS property sets an element's width. By default, it sets the width of the content area, but if `box-sizing` is set to `border-box`, it sets the width of the border area. */
    width: true,

    /** The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the content area. If `box-sizing` is set to `border-box`, however, it instead determines the height of the border area. */
    height: true,

    /** The **`border-radius`** CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.  */
    borderRadius: vars.radii,

    /** The **`font-family`** CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element. */
    fontFamily: vars.fonts,

    /** The **`font-size`** CSS property sets the size of the font. Changing the font size also updates the sizes of the font size-relative `<length>` units, such as `em`, `ex`, and so forth. */
    fontSize: vars.fontSizes,

    /** The **`font-weight`** CSS property sets the weight (or boldness) of the font. The weights available depend on the `font-family` that is currently set. */
    fontWeight: vars.fontWeights,

    /** The **`font-style`** CSS property sets whether a font should be styled with a normal, italic, or oblique face from its `font-family`. */
    fontStyle: true,

    /** The **`line-height`** CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height. */
    lineHeight: vars.lineHeights,

    /** The **`text-align`** CSS property sets the horizontal alignment of the content inside a block element or table-cell box. This means it works like `vertical-align` but in the horizontal direction. */
    textAlign: true,

    /** The **`text-transform`** CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby. */
    textTransform: true,

    /** The **`z-index`** CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one. */
    zIndex: true,

    /** The **`position`** CSS property sets how an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements. */
    position: true,

    /** The **`top`** CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements. */
    top: vars.spaces,

    /** The **`left`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements. */
    left: vars.spaces,

    /** The **`right`** CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements. */
    right: vars.spaces,

    /** The **`bottom`** CSS property participates in setting the vertical position of a positioned element. It has no effect on non-positioned elements. */
    bottom: vars.spaces,

    /** The **`vertical-align`** CSS property sets vertical alignment of an inline, inline-block or table-cell box. */
    verticalAlign: true,

    /** The **`margin`** CSS shorthand property sets the margin area on all four sides of an element. */
    margin: vars.spaces,

    /** The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    marginBottom: vars.spaces,

    /** The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    marginLeft: vars.spaces,

    /** The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    marginRight: vars.spaces,

    /** The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    marginTop: vars.spaces,
  },
  staticProperties: {
    display: ['block', 'flex', 'inline-block', 'inline-flex'],
  },
  shorthands: {
    /** The **`padding`** CSS shorthand property sets the padding area on all four sides of an element at once. */
    p: ['padding'],

    /** The **`padding-left`** CSS property sets the width of the padding area to the left of an element. */
    pl: ['paddingLeft'],

    /** The **`padding-right`** CSS property sets the width of the padding area on the right of an element. */
    pr: ['paddingRight'],

    /** The **`padding-top`** CSS property sets the height of the padding area on the top of an element. */
    pt: ['paddingTop'],

    /** The **`padding-bottom`** CSS property sets the height of the padding area on the bottom of an element. */
    pb: ['paddingBottom'],

    /** The **`padding-left`** and **`padding-right`** CSS property sets the width of the padding area to the left and right of an element. */
    paddingX: ['paddingLeft', 'paddingRight'],

    /** The **`padding-top`** and **`padding-bottom`** CSS property sets the width of the padding area to the top and bottom of an element. */
    paddingY: ['paddingTop', 'paddingBottom'],

    /** The **`padding-left`** and **`padding-right`** CSS property sets the width of the padding area to the left and right of an element. */
    px: ['paddingLeft', 'paddingRight'],

    /** The **`padding-top`** and **`padding-bottom`** CSS property sets the width of the padding area to the top and bottom of an element. */
    py: ['paddingTop', 'paddingBottom'],

    /** The **`margin`** CSS shorthand property sets the margin area on all four sides of an element. */
    m: ['margin'],

    /** The **`margin-right`** CSS property sets the margin area on the right side of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    mr: ['marginRight'],

    /** The **`margin-left`** CSS property sets the margin area on the left side of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    ml: ['marginLeft'],

    /** The **`margin-top`** CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    mt: ['marginTop'],

    /** The **`margin-bottom`** CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    mb: ['marginBottom'],

    /** The **`margin-left`** and **`margin-right`** CSS property sets the margin area on the left and right of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    marginX: ['marginLeft', 'marginRight'],

    /** The **`margin-top`** and **`margin-bottom`** CSS property sets the margin area on the top and bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    marginY: ['marginTop', 'marginBottom'],

    /** The **`margin-left`** and **`margin-right`** CSS property sets the margin area on the left and right of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
    mx: ['marginLeft', 'marginRight'],

    /** The **`margin-top`** and **`margin-bottom`** CSS property sets the margin area on the top and bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer. */
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
    /** The **`color`** CSS property sets the foreground color value of an element's text and text decorations, and sets the `<currentcolor>` value. `currentcolor` may be used as an indirect value on _other_ properties and is the default for other color properties, such as `border-color`. */
    color: vars.colors,

    /** The **`background-color`** CSS property sets the background color of an element. */
    backgroundColor: vars.colors,

    /** The **`transform`** CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model. */
    transform: true,

    /** The **`transition`** CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. */
    transition: true,

    /** The **`animation`** shorthand CSS property applies an animation between styles. It is a shorthand for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`. */
    animation: true,
  },
  shorthands: {
    /** The **`background-color`** CSS property sets the background color of an element. */
    bg: ['backgroundColor'],
  },
})

export const atomicStyles = createRainbowSprinkles(responsiveProperties, interactiveProperties)

type _AtomicStylesProps = Parameters<typeof atomicStyles>[0]
export type AtomicStylesProps = Simplify<_AtomicStylesProps>
