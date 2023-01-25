import { tuple } from '../utils'

export const wishBrightColors = tuple('sky', 'mint', 'lime', 'yellow', 'amber')
export const isBrightColor = (color: string) => (wishBrightColors as string[]).includes(color)

export const wishNeutralColors = tuple('gray', 'mauve', 'slate', 'sage', 'olive', 'sand')
export const isNeutralColor = (color: string) => (wishNeutralColors as string[]).includes(color)

export const wishMetalColors = tuple('gold', 'bronze')
export const isMetalColor = (color: string) => (wishMetalColors as string[]).includes(color)

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
export const isBaseColor = (color: string) => (wishBaseColors as string[]).includes(color)

export const wishColors = tuple(
  ...wishBrightColors,
  ...wishNeutralColors,
  ...wishMetalColors,
  ...wishBaseColors,
)
export const isWishColor = (color: string) => (wishColors as string[]).includes(color)
