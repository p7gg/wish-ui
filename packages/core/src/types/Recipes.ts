import type { ComplexStyleRule } from '@vanilla-extract/css'

export type RecipeStyleRule = ComplexStyleRule | string
export type VariantDefinitions = Record<string, RecipeStyleRule>
export type BooleanMap<T> = T extends 'true' | 'false' ? boolean : T
export type VariantGroups = Record<string, VariantDefinitions>
export type VariantSelection<Variants> = {
  [VariantGroup in keyof Variants]?: BooleanMap<keyof Variants[VariantGroup]> | boolean
}
export interface CompoundVariant<Variants = any> {
  variants: VariantSelection<Variants>
  style: RecipeStyleRule
}
