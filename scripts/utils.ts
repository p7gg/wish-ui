import path from 'path'

export const resolve = (...pathSegments: string[]) => path.resolve(__dirname, ...pathSegments)
