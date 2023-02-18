/* eslint-disable no-console */
import * as c from 'colorette'
import { lstat, pathExists, remove } from 'fs-extra'

const root = process.cwd()
const pkgJson = findClosestPackageJson(root)
const dirsToClean = process.argv.slice(2)

import { findClosestPackageJson, r } from './utils'
;(async () => {
  try {
    if (!dirsToClean.length) {
      throw new Error('Please provide directories to clean up.')
    }

    const promises: Promise<string>[] = []

    for (const dir of dirsToClean) {
      const fullPath = r(root, dir)

      const dirExists = await pathExists(fullPath)

      if (!dirExists) continue

      const stats = await lstat(fullPath)

      if (!stats.isDirectory()) {
        throw new Error(`The provided path is not a directory: ${fullPath}`)
      }

      promises.push(remove(fullPath).then(() => dir))
    }

    await Promise.all(promises)

    console.log(`Successfully cleaned workspace: ${c.green(pkgJson.name)}`)
  } catch (error) {
    console.error(`An error occurred while cleaning up workspace: ${c.red(pkgJson.name)}`)
  }
})()
