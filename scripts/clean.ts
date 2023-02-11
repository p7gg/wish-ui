/* eslint-disable no-console */
import { remove } from 'fs-extra'

import { resolve } from './utils'
;(async () => {
  const root = process.cwd()
  const dirs = process.argv.slice(2)
  const promises: Promise<void>[] = []

  dirs.map((dir) => {
    promises.push(remove(resolve(root, dir)))
  })

  Promise.all(promises).then(() => {
    console.log('cleaned up')
  })
})()
