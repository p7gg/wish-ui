import { tuple } from '../utils'

export type WishSize = (typeof wishSizes)[number]
export const wishSizes = tuple('xs', 'sm', 'md', 'lg', 'xl')
export const isWishSize = (size: string) => (wishSizes as string[]).includes(size)
