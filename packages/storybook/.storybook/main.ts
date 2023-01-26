import { StorybookConfig } from '@storybook/html-vite'
import { mergeConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { vanillaExtractPlugin } from '@wish-ui/vite-plugin'

const config: StorybookConfig = {
  stories: ['../../core/src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin(), solidPlugin()],
    })
  },
}

export default config
