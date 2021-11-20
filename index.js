const lib = require('functionalscript/lib')

/**
 * @typedef {{
 *  left: TNode
 *  value: string
 *  right: TNode
 * }} TNode
 */

/** @type {(node: TNode) => (newValue: string) => TNode} */
const insert = ({left, value, right }) => newvalue => {
  if (value === newValue) { return node }
  return lib.todo()
}

module.exports = 'Hello world!'
