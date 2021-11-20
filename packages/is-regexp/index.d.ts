/**
 * Check if a value is a regular expression.
 *
 * @example
 * ```
 * import isRegExp from '@yuler/is-regexp'
 * isRegExp(/foo/)
 * //=> true
 *
 * isRegExp(new RegExp('foo'))
 * //=> true
 *
 * isRegExp('foo')
 * //=> false
 * ```
 */
export default function isRegexp(value: unknown): value is RegExp
