import { Checkbox as KCheckbox } from '@kobalte/core'

import { createComponent } from '../utils'

import { CheckboxIcon } from './CheckboxIcon'

import type { AtomicStylesProps } from '../theme'

export interface CheckboxProps extends KCheckbox.CheckboxRootOptions, AtomicStylesProps {}

export const Checkbox = createComponent<'input', CheckboxProps>((_props) => {
  return (
    <KCheckbox.Root>
      <KCheckbox.Input />

      <KCheckbox.Control>
        <KCheckbox.Indicator>
          <CheckboxIcon />
        </KCheckbox.Indicator>
      </KCheckbox.Control>

      <KCheckbox.Label>Subscribe</KCheckbox.Label>
    </KCheckbox.Root>
  )
})
