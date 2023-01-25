import type { WishColor } from '../../constants'
import type { ColorMode } from './ColorMode'

export interface WishTheme {
  colorMode: ColorMode
  primaryColor: WishColor
}

export type WishThemeOverrides = Partial<WishTheme>
