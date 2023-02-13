export type Tuple<T extends string[]> = T[number]

export const tuple = <T extends string[]>(...args: T) => args
