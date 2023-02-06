import type { RuntimeFn } from '@vanilla-extract/recipes'

export const getVariantClass = <T extends RuntimeFn<any>>(recipe: T, variants: Parameters<T>[0]) =>
  `.${recipe(variants).split(' ')[1]}`
