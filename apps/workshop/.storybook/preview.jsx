/* @refresh reload */

import { render } from 'solid-js/web'
import { themes } from '@storybook/theming'

import { WishProvider } from '@wish-ui/core'

let disposeStory

export const decorators = [
  (Story, context) => {
    const { colorMode } = context.globals

    if (disposeStory) {
      disposeStory()
    }

    const body = document.body
    const root = document.createElement('root')

    root.setAttribute('id', 'solid-root')
    body.appendChild(root)

    disposeStory = render(
      () =>
        WishProvider({
          withGlobalStyles: true,
          theme: {
            colorMode,
          },
          children: Story(),
        }),
      root,
    )
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

export const globalTypes = {
  colorMode: {
    name: 'ColorMode',
    description: 'Global colorMode for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'paintbrush',
      // Array of plain string values or MenuItem shape
      items: [
        { value: 'light', title: 'Light', left: '🌞' },
        { value: 'dark', title: 'Dark', left: '🌛' },
      ],
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
}
