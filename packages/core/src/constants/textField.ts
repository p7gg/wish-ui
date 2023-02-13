import { tuple } from '../utils'

export type TextFieldVariant = (typeof textFieldVariants)[number]
export const textFieldVariants = tuple('default', 'filled')
