import { ComponentProps, createMemo, splitProps } from 'solid-js'

import { Button as KButton } from '@kobalte/core'
import { combineProps } from '@solid-primitives/props'

import { AtomicStyles, atomicStyles } from '../theme'
import { createPolymorphicComponent } from '../utils'
import { useWishTheme } from '../WishProvider'

import { unstyledButton, UnstyledButtonVariantProps } from './UnstyledButton.css'

type KButtonProps = ComponentProps<typeof KButton.Root>
export type UnstyledButtonProps = KButtonProps & UnstyledButtonVariantProps & AtomicStyles & {}

export const UnstyledButton = createPolymorphicComponent<'button', UnstyledButtonProps>(
  (_props) => {
    const theme = useWishTheme()

    const [variants, atomicProps, rest] = splitProps(
      _props,
      ['colorScheme'],
      [...atomicStyles.properties.keys()],
    )
    const atoms = createMemo(() => atomicStyles(atomicProps))

    const props = combineProps(
      {
        as: 'button',
        get class() {
          return `${unstyledButton({
            colorScheme: variants.colorScheme ?? theme.primaryColor,
          })} ${atoms().className}`
        },
        get style() {
          return atoms().style
        },
      } as const,
      rest,
    )

    return <KButton.Root {...props} />
  },
)
