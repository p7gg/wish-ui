import { tuple } from '../utils'

export type WishActionIcon = (typeof actionIconVariants)[number]
export const actionIconVariants = tuple('subtle', 'filled', 'outline', 'light', 'default')
