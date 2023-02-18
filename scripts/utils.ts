import { readFileSync } from 'fs-extra'
import { dirname, resolve } from 'node:path'

export const r = (...pathSegments: string[]) => resolve(__dirname, ...pathSegments)

export const findClosestPackageJson = (start: string, level = 0) => {
  try {
    const path = resolve(start, 'package.json')
    const content = readFileSync(path, { encoding: 'utf8' })

    return JSON.parse(content)
  } catch {
    return level >= 10 ? {} : findClosestPackageJson(dirname(start), level + 1)
  }
}
