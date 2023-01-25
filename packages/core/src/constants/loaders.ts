import { tuple } from '../utils'

export type WishLoader = (typeof wishLoaders)[number]
export const wishLoaders = tuple('oval', 'bars', 'dots')
export const isWishLoader = (loader: string): loader is WishLoader =>
  wishLoaders.includes(loader as any)
