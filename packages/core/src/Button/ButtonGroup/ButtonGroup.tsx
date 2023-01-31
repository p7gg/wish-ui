import { createContext, splitProps, useContext } from 'solid-js'

import { combineProps } from '@solid-primitives/props'

import { clsx } from 'clsx'

import { Box, BoxProps } from '../../Box'
import { createComponent } from '../../utils'

import classes from './ButtonGroup.css'

type ButtonGroupContextValue = {
  orientation: 'vertical' | 'horizontal'
  buttonBorderWidth?: number
}
const ButtonGroupContext = createContext<ButtonGroupContextValue>()

export const useButtonGroup = () => useContext(ButtonGroupContext)

export interface ButtonGroupProps extends BoxProps, Partial<ButtonGroupContextValue> {}

export const ButtonGroup = createComponent<'div', ButtonGroupProps>((_props) => {
  const props = combineProps(
    {
      orientation: 'horizontal',
      buttonBorderWidth: 1,
    } as const,
    _props,
  )
  const [local, variants, others] = splitProps(
    props,
    ['class'],
    ['orientation', 'buttonBorderWidth'],
  )

  const value = {
    get orientation() {
      return variants.orientation
    },
    get buttonBorderWidth() {
      return variants.buttonBorderWidth
    },
  }

  return (
    <ButtonGroupContext.Provider value={value}>
      <Box class={clsx(classes.root[variants.orientation], local.class)} {...others} />
    </ButtonGroupContext.Provider>
  )
})