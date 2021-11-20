const { todo } = require('functionalscript/lib')

/**
 * @typedef {{
 *  left: TNode
 *  value: string
 *  right: TNode
 * }} TNode
 */

/** @type {(node: TNode) => (newValue: string) => TNode} */
const insert = node => newValue => {
  const { value } = node
  if (newValue === value) { return node }
  if (newValue < value) { return todo() }
  return todo()
}

module.exports = {
  /** @readonly */
  insert,
}
