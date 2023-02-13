import type { LoaderVariant, WishColor } from '../../constants'
import type { ColorMode } from './ColorMode'

export interface WishTheme {
  colorMode: ColorMode
  primaryColor: WishColor
  defaultLoader: LoaderVariant
}

export type WishThemeOverrides = Partial<WishTheme>
