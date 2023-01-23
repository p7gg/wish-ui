import withSolid from '@wish-ui/rollup-preset-solid'

import pkg from './package.json' assert { type: 'json' }

const external = [
  ...Object.keys(pkg.peerDependencies),
  ...Object.keys(pkg.dependencies),
  'solid-js/web',
  'solid-js/store',
  '@vanilla-extract/recipes/createRuntimeFn',
  'rainbow-sprinkles/createRuntimeFn',
]

function buildOutput(format) {
  return {
    preserveModules: true,
    preserveModulesRoot: 'src',
    dir: `./dist/${format}`,
    format: format,
  }
}

export default withSolid({
  input: 'src/index.tsx',
  targets: ['esm', 'cjs'],
  output: [buildOutput('esm'), buildOutput('cjs')],
  external,
  printInstructions: true,
})
