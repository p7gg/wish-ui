import { render } from 'solid-js/web'
import { createSignal, onCleanup, onMount } from 'solid-js'
import { themes } from '@storybook/theming'

import { addons } from '@storybook/addons'
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode'

import { WishProvider } from '@wish-ui/core'

let disposeStory
const channel = addons.getChannel()

const [colorMode, setColorMode] = createSignal('dark')

function WishWrapper(props) {
  const listener = (isDark) => setColorMode(() => (isDark ? 'dark' : 'light'))

  onMount(() => {
    channel.on(DARK_MODE_EVENT_NAME, listener)
  })

  onCleanup(() => {
    channel.off(DARK_MODE_EVENT_NAME, listener)
  })

  return (
    <WishProvider withGlobalStyles theme={{ colorMode: colorMode() }}>
      {props.children}
    </WishProvider>
  )
}

export const decorators = [
  (Story) => {
    if (disposeStory) {
      disposeStory()
    }

    const body = document.body
    const root = document.createElement('root')

    root.setAttribute('id', 'solid-root')
    body.appendChild(root)

    disposeStory = render(() => WishWrapper({ children: Story() }), root)
    return root
  },
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  decorators,
  options: {
    parameters: { options: { showPanel: true, panelPosition: 'right' } },
    storySort: {
      order: ['Button', 'Data entry', 'Data display', 'Navigation', 'Feedback', 'Overlay'],
    },
  },
  darkMode: {
    light: { ...themes.normal, appBg: '#f9fafb', appContentBg: '#ffffff' },
    dark: { ...themes.dark, appBg: '#1c1c1c', appContentBg: '#161616' },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
