import { style, styleVariants } from '@vanilla-extract/css'

import type { WishTransition } from '../constants'

interface TransitionComposition {
  enterFrom: string
  enterActive: string
  enterTo: string
  exitFrom: string
  exitActive: string
  exitTo: string
}

const base = style({
  transitionDuration: '250ms',
  transitionTimingFunction: 'ease',
})

const fade = styleVariants({
  enterFrom: { opacity: 0 },
  enterTo: { opacity: 1 },
  enterActive: [
    base,
    {
      transitionProperty: 'opacity',
    },
  ],
})
const scale = styleVariants({
  enterFrom: { opacity: 0, transform: 'scale(0)' },
  enterTo: { opacity: 1, transform: 'scale(1)' },
  enterActive: [
    base,
    {
      transformOrigin: 'top',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const scaleY = styleVariants({
  enterFrom: { opacity: 0, transform: 'scaleY(0)' },
  enterTo: { opacity: 1, transform: 'scaleY(1)' },
  enterActive: [
    base,
    {
      transformOrigin: 'top',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const scaleX = styleVariants({
  enterFrom: { opacity: 0, transform: 'scaleX(0)' },
  enterTo: { opacity: 1, transform: 'scaleX(1)' },
  enterActive: [
    base,
    {
      transformOrigin: 'left',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const skewUp = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateY(-20px) skew(-10deg, -5deg)' },
  enterTo: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
  enterActive: [
    base,
    {
      transformOrigin: 'top',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const skewDown = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateY(20px) skew(-10deg, -5deg)' },
  enterTo: { opacity: 1, transform: 'translateY(0) skew(0deg, 0deg)' },
  enterActive: [
    base,
    {
      transformOrigin: 'bottom',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const rotateLeft = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateY(20px) rotate(-5deg)' },
  enterTo: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
  enterActive: [
    base,
    {
      transformOrigin: 'bottom',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const rotateRight = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateY(20px) rotate(5deg)' },
  enterTo: { opacity: 1, transform: 'translateY(0) rotate(0deg)' },
  enterActive: [
    base,
    {
      transformOrigin: 'top',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const slideDown = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateY(-100%)' },
  enterTo: { opacity: 1, transform: 'translateY(0)' },
  enterActive: [
    base,
    {
      transformOrigin: 'top',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const slideUp = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateY(100%)' },
  enterTo: { opacity: 1, transform: 'translateY(0)' },
  enterActive: [
    base,
    {
      transformOrigin: 'bottom',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const slideLeft = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateX(100%)' },
  enterTo: { opacity: 1, transform: 'translateX(0)' },
  enterActive: [
    base,
    {
      transformOrigin: 'left',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const slideRight = styleVariants({
  enterFrom: { opacity: 0, transform: 'translateX(-100%)' },
  enterTo: { opacity: 1, transform: 'translateX(0)' },
  enterActive: [
    base,
    {
      transformOrigin: 'right',
      transitionProperty: 'transform, opacity',
    },
  ],
})
const pop = styleVariants({
  enterFrom: { opacity: 0, transform: 'scale(.9) translateY(10px)' },
  enterTo: { opacity: 1, transform: 'scale(1)' },
  enterActive: [
    base,
    {
      transitionProperty: 'transform, opacity',
      transformOrigin: 'center center',
    },
  ],
})
const popBottomLeft = styleVariants({
  enterFrom: { opacity: 0, transform: 'scale(.9) translateY(10px)' },
  enterTo: { opacity: 1, transform: 'scale(1)' },
  enterActive: [
    base,
    {
      transitionProperty: 'transform, opacity',
      transformOrigin: 'bottom left',
    },
  ],
})
const popBottomRight = styleVariants({
  enterFrom: { opacity: 0, transform: 'scale(.9) translateY(10px)' },
  enterTo: { opacity: 1, transform: 'scale(1)' },
  enterActive: [
    base,
    {
      transitionProperty: 'transform, opacity',
      transformOrigin: 'bottom right',
    },
  ],
})
const popTopLeft = styleVariants({
  enterFrom: { opacity: 0, transform: 'scale(.9) translateY(10px)' },
  enterTo: { opacity: 1, transform: 'scale(1)' },
  enterActive: [
    base,
    {
      transitionProperty: 'transform, opacity',
      transformOrigin: 'top left',
    },
  ],
})
const popTopRight = styleVariants({
  enterFrom: { opacity: 0, transform: 'scale(.9) translateY(10px)' },
  enterTo: { opacity: 1, transform: 'scale(1)' },
  enterActive: [
    base,
    {
      transitionProperty: 'transform, opacity',
      transformOrigin: 'top right',
    },
  ],
})

export const classes = {
  'w-fade': fade,
  'w-scale': scale,
  'w-scale-y': scaleY,
  'w-scale-x': scaleX,
  'w-skew-up': skewUp,
  'w-skew-down': skewDown,
  'w-rotate-left': rotateLeft,
  'w-rotate-right': rotateRight,
  'w-slide-down': slideDown,
  'w-slide-up': slideUp,
  'w-slide-left': slideLeft,
  'w-slide-right': slideRight,
  'w-pop': pop,
  'w-pop-bottom-left': popBottomLeft,
  'w-pop-bottom-right': popBottomRight,
  'w-pop-top-left': popTopLeft,
  'w-pop-top-right': popTopRight,
} as Record<`w-${WishTransition}`, TransitionComposition>
