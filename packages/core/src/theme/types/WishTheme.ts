import type { ColorMode } from './ColorMode'

export interface WishTheme {
  colorMode: ColorMode
}

export type WishThemeOverrides = Partial<WishTheme>
