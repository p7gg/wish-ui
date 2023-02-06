import { tuple } from '../utils'

export type TextFieldVariant = (typeof wishTextFields)[number]
export const wishTextFields = tuple('default', 'filled')
