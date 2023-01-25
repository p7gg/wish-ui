import { ComponentProps, splitProps } from 'solid-js'

import { Button as KobalteButton } from '@kobalte/core'
import { combineProps } from '@solid-primitives/props'

import { createPolymorphicComponent } from '../utils'

import { unstyledButton, UnstyledButtonVariantProps } from './UnstyledButton.css'

type UnstyledButtonProps = ComponentProps<(typeof KobalteButton)['Root']> &
  UnstyledButtonVariantProps

export const UnstyledButton = createPolymorphicComponent<'button', UnstyledButtonProps>(
  (_props) => {
    const [variants, rest] = splitProps(_props, ['colorScheme'])

    const props = combineProps(
      {
        as: 'button',
        get class() {
          return unstyledButton(variants)
        },
      } as const,
      rest,
    )

    return <KobalteButton.Root {...props} />
  },
)
