import { Tuple, tuple } from '../utils'

export type WishTransition = Tuple<typeof wishTransitions>
export const wishTransitions = tuple(
  'fade',
  'scale',
  'scale-y',
  'scale-x',
  'skew-up',
  'skew-down',
  'rotate-left',
  'rotate-right',
  'slide-down',
  'slide-up',
  'slide-left',
  'slide-right',
  'pop',
  'pop-bottom-left',
  'pop-bottom-right',
  'pop-top-left',
  'pop-top-right',
)
export const isWishTransition = (transition: string): transition is WishTransition =>
  (wishTransitions as string[]).includes(transition)
