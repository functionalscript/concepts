const { todo } = require('functionalscript/lib')

/**
 * @typedef {{
 *  left: TNode|undefined
 *  value: string
 *  right: TNode|undefined
 * }} TNode
 */

/** @type {(node: TNode|undefined) => (value: string) => TNode} */
const insert = node => value => {
  if (node === undefined) { 
    return { 
      left: undefined, 
      value,
      right: undefined,
    }
  }
  const nodeValue = node.value
  if (value === nodeValue) { return node }
  if (value < nodeValue) { 
    return todo()
  }
  return todo()
}

module.exports = {
  /** @readonly */
  insert,
}
