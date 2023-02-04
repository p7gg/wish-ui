import { splitProps } from 'solid-js'

import { combineProps } from '@solid-primitives/props'
import { assignInlineVars } from '@vanilla-extract/dynamic'

import clsx from 'clsx'

import { Box } from '../Box'
import { createPolymorphicComponent, isNumber } from '../utils'

import { classes, textLineClampVar } from './Text.css'

import type { AtomicStylesProps } from '../theme'

export interface TextProps extends AtomicStylesProps {
  /**
   * The **`-webkit-line-clamp`** CSS property allows limiting of the contents of a block container to the specified number of lines
   */
  lineClamp?: number

  /**
   * Overflow text with ellipsis
   *
   * @default false
   */
  truncate?: boolean

  /**
   * Sets line-height to 1 for centering
   *
   * @default false
   */
  inline?: boolean

  /**
   * Underline the text
   *
   * @default false
   */
  underline?: boolean

  /**
   * Strike-through the text
   *
   * @default false
   */
  strikeThrough?: boolean

  /**
   * Inherit font properties from parent element
   *
   * @default false
   */
  inherit?: boolean
}
export interface TextCompositions {}

export const Text = createPolymorphicComponent<'div', TextProps, TextCompositions>((_props) => {
  const props = combineProps(
    {
      get clamp() {
        return isNumber(_props.lineClamp)
      },
      get style() {
        return assignInlineVars({
          ...(this.clamp && { [textLineClampVar]: _props.lineClamp!.toString() }),
        })
      },
    },
    _props,
  )
  const [local, variants, others] = splitProps(
    props,
    ['lineClamp', 'children', 'class'],
    ['truncate', 'clamp', 'inline', 'underline', 'strikeThrough', 'inherit'],
  )

  return (
    <Box class={clsx(classes.root(variants), local.class)} {...others}>
      {local.children}
    </Box>
  )
})
