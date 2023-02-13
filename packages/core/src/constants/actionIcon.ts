import { Tuple, tuple } from '../utils'

export type ActionIconVariant = Tuple<typeof actionIconVariants>
export const actionIconVariants = tuple('subtle', 'filled', 'outline', 'light', 'default')
