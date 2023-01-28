import { tuple } from '../utils'

export type ButtonVariant = (typeof buttonVariants)[number]
export const buttonVariants = tuple('filled', 'light', 'subtle', 'outline', 'default')
