import type { ColorMode } from '../theme'
import type { StyleRule } from '@vanilla-extract/css'

type ColorModeAttr<T extends ColorMode, NS extends string = never> = never extends NS
  ? `[data-wish-theme=${T}] &`
  : `[data-wish-theme=${T}] ${NS}`

export type TypedColorMode<
  T extends NonNullable<StyleRule['selectors']>,
  NS extends string = never,
> = {
  [K in keyof T & ColorMode as ColorModeAttr<K, NS>]: T[K]
}

export function withColorMode<
  T extends NonNullable<StyleRule['selectors']>,
  NS extends string = never,
>(themes: T, nestedSelector?: NS): TypedColorMode<T, NS> {
  const suffix = nestedSelector ? `${nestedSelector}` : '&'

  return Object.entries(themes).reduce<NonNullable<StyleRule['selectors']>>(
    (acc, [themeKey, themeValue]) => {
      acc[`[data-wish-theme=${themeKey}] ${suffix}`] = themeValue

      return acc
    },
    {},
  ) as TypedColorMode<T, NS>
}
