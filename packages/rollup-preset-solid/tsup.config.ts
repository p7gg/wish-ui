import { defineConfig } from 'tsup'

import { dependencies, peerDependencies } from './package.json'

const external = [...Object.keys(dependencies), ...Object.keys(peerDependencies)]

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  external,
  format: ['esm'],
  sourcemap: true,
  platform: 'node',
})
