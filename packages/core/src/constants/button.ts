import { tuple } from '../utils'

export type WishButton = (typeof wishButtons)[number]
export const wishButtons = tuple('filled', 'light', 'subtle', 'outline', 'default')
