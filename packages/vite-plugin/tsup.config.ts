import { defineConfig } from 'tsup'

import { dependencies, peerDependencies } from './package.json'

const external = [...Object.keys(dependencies), ...Object.keys(peerDependencies)]

export default defineConfig({
  sourcemap: true,
  dts: true,
  clean: true,
  external,
  platform: 'node',
  entry: ['src/index.ts', 'src/vanillaCssTsFilesLoader.ts'],
  format: ['cjs', 'esm'],
})
