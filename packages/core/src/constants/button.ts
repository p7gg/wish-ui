import { Tuple, tuple } from '../utils'

export type ButtonVariant = Tuple<typeof buttonVariants>
export const buttonVariants = tuple('filled', 'light', 'subtle', 'outline', 'default')
