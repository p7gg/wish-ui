import { Tuple, tuple } from '../utils'

export type LoaderVariant = Tuple<typeof loaderVariants>
export const loaderVariants = tuple('oval', 'bars', 'dots')
