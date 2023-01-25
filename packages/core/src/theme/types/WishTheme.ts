import type { WishColor, WishLoader } from '../../constants'
import type { ColorMode } from './ColorMode'

export interface WishTheme {
  colorMode: ColorMode
  primaryColor: WishColor
  defaultLoader: WishLoader
}

export type WishThemeOverrides = Partial<WishTheme>
