import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [vanillaExtractPlugin(), solidPlugin()],
  build: {
    target: 'esnext',
  },
})
