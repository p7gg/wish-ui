import { tuple } from '../utils'

export type WishBrightColor = (typeof wishBrightColors)[number]
export const wishBrightColors = tuple('sky', 'mint', 'lime', 'yellow', 'amber')
export const isBrightColor = (color: string): color is WishBrightColor =>
  (wishBrightColors as string[]).includes(color)

export type WishNeutralColor = (typeof wishNeutralColors)[number]
export const wishNeutralColors = tuple('gray', 'mauve', 'slate', 'sage', 'olive', 'sand')
export const isNeutralColor = (color: string): color is WishNeutralColor =>
  (wishNeutralColors as string[]).includes(color)

export type WishMetalColor = (typeof wishMetalColors)[number]
export const wishMetalColors = tuple('gold', 'bronze')
export const isMetalColor = (color: string): color is WishMetalColor =>
  (wishMetalColors as string[]).includes(color)

export type WishBaseColor = (typeof wishBaseColors)[number]
export const wishBaseColors = tuple(
  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'grass',
  'orange',
  'brown',
)
export const isBaseColor = (color: string): color is WishBaseColor =>
  (wishBaseColors as string[]).includes(color)

export type WishColor = (typeof wishColors)[number]
export const wishColors = tuple(
  ...wishBrightColors,
  ...wishNeutralColors,
  ...wishMetalColors,
  ...wishBaseColors,
)
export const isWishColor = (color: string): color is WishColor =>
  (wishColors as string[]).includes(color)
