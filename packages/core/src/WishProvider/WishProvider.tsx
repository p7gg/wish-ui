import { createContext, createEffect, on, ParentComponent, useContext } from 'solid-js'

import type { WishTheme, WishThemeOverrides } from '../theme'

type WishContextValue = {
  theme: WishTheme
}
const defaultValue: WishContextValue = {
  theme: {
    colorMode: 'light',
  },
}

const WishContext = createContext(defaultValue)

export const useWish = () => useContext(WishContext)
export const useWishTheme = () => useContext(WishContext).theme

export interface WishProviderProps {
  theme?: WishThemeOverrides
  withGlobalStyles?: boolean
}

export const WishProvider: ParentComponent<WishProviderProps> = (props) => {
  createEffect(
    on(
      () => props.withGlobalStyles,
      () => {
        if (props.withGlobalStyles) import('../css/global.css')
      },
    ),
  )

  createEffect(() => {
    document.documentElement.setAttribute(
      'data-wish-theme',
      props.theme?.colorMode ?? defaultValue.theme.colorMode,
    )
  })

  const value = {
    theme: {
      get colorMode() {
        return props.theme?.colorMode ?? defaultValue.theme.colorMode
      },
    },
  }

  return <WishContext.Provider value={value}>{props.children}</WishContext.Provider>
}
