/* eslint-disable no-console */
import * as c from 'colorette'
import { copy, pathExists, readFile, writeFile } from 'fs-extra'
import { join } from 'node:path'

import { r } from './utils'

const name = process.argv.pop()

if (!name || !/^[a-z0-9-]+$/.test(name)) {
  throw new Error(`Incorrect package name argument: ${name}`)
}

const templateSrc = r('../template')
const destSrc = r('../packages', name)
const pkgPath = join(destSrc, 'package.json')
const readmePath = join(destSrc, 'README.md')

;(async () => {
  const alreadyExists = await pathExists(destSrc)

  if (alreadyExists) {
    throw new Error(`Package ${name} already exists.`)
  }

  try {
    // copy /template -> /packages/{name}
    await copy(templateSrc, destSrc)

    // replace "template-primitive" -> {name} in package.json
    let pkgString = await readFile(pkgPath, 'utf8')

    pkgString = pkgString.replace(/template-primitive/gi, name)
    await writeFile(pkgPath, pkgString)

    // replace "template-primitive" -> {name} in README.md
    let readme = await readFile(readmePath, 'utf8')

    readme = readme.replace(/template-primitive/gi, name)
    await writeFile(readmePath, readme)

    const pkgJson = JSON.parse(pkgString)

    console.log(`Successfully created workspace: ${c.green(pkgJson.name)}`)
  } catch (error) {
    console.error('Copying template failed')
    throw error
  }
})()
