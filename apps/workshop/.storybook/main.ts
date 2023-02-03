import { StorybookConfig } from '@storybook/html-vite'
import { mergeConfig } from 'vite'
import viteConfig from '../vite.config'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal(config) {
    return mergeConfig(config, viteConfig)
  },
}

export default config
