/**
 * @template T
 * @typedef {{
 *  next: () => Sequence<T>
 *  current: T
 * }} NotEmptySequence
 */

/**
 * @template T
 * @typedef {NotEmptySequence<T>|undefined} Sequence
 */
