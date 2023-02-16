type DefinitelyNumber<T> = Extract<T, number> extends never
  ? number
  : Extract<T, number> extends any
  ? number
  : Extract<T, number>

/**
 * A function that checks if the passed parameter is a number and narrows its type accordingly
 *
 * @param data the variable to check
 * @returns true if the passed input is a number, false otherwise
 * @example
 *    isNumber(1) //=> true
 *    isNumber('notANumber') //=> false
 */
export function isNumber<T>(data: T | number): data is DefinitelyNumber<T> {
  return typeof data === 'number' && !isNaN(data)
}

type DefinitelyString<T> = Extract<T, string> extends never
  ? string
  : Extract<T, string> extends any
  ? string
  : Extract<T, string>

/**
 * A function that checks if the passed parameter is a string and narrows its type accordingly
 *
 * @param data the variable to check
 * @returns true if the passed input is a string, false otherwise
 * @example
 *    isString('string') //=> true
 *    isString(1) //=> false
 */
export function isString<T>(data: T | string): data is DefinitelyString<T> {
  return typeof data === 'string'
}

/**
 * A function that checks if the passed parameter is defined and narrows its type accordingly
 *
 * @param data the variable to check
 * @returns true if the passed input is defined, false otherwise
 * @example
 *    isDefined('string') //=> true
 *    isDefined(null) //=> false
 *    isDefined(undefined) //=> false
 */
export function isDefined<T>(data: T): data is NonNullable<T> {
  return typeof data !== 'undefined' && data !== null
}
