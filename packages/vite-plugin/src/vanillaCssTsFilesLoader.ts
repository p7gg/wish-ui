import * as fs from 'node:fs'
import * as path from 'node:path'

import type { CompileOptions } from '@vanilla-extract/integration'

type EsbuildOptions = NonNullable<CompileOptions['esbuildOptions']>
type Plugins = NonNullable<EsbuildOptions['plugins']>

export function vanillaCssTsFilesLoader(): Plugins[number] {
  return {
    name: 'esbuild-vanilla-extract-css-ts-loader',
    setup(build) {
      build.onLoad({ filter: /.css.ts.vanilla.css$/ }, async ({ path: path$1 }) => {
        const css = await fs.promises.readFile(path$1, 'utf-8')

        return {
          contents: css,
          loader: 'text',
          resolveDir: path.dirname(path$1),
        }
      })
    },
  }
}
