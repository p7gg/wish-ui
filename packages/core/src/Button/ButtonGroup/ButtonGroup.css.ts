import { style, styleVariants } from '@vanilla-extract/css'

const orientation = {
  vertical: 'column',
  horizontal: 'row',
} as const

const _root = style({ display: 'flex' })
const root = styleVariants(orientation, (flexDirection) => [_root, { flexDirection }])

export const classes = {
  root,
}
