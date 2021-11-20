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
  const oldValue = node.value
  if (value === oldValue) { return node }
  if (value < oldValue) { 
    const oldLeft = node.left
    const left = insert(oldLeft)(value)
    if (left === oldLeft) { return node }
    return { 
      left, 
      value, 
      right: node.right,
    }
  }
  return todo()
}

module.exports = {
  /** @readonly */
  insert,
}
