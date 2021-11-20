const { todo } = require('functionalscript/lib')

/**
 * @typedef {{
 *  left: TNode|undefined
 *  value: string
 *  right: TNode|undefined
 * }} TNode
 */

/** @type {(old: TNode|undefined) => (value: string) => TNode} */
const insert = old => value => {
  if (node === undefined) { 
    return { 
      left: undefined, 
      value,
      right: undefined,
    }
  }
  if (value < old.value) { 
    const left = insert(old.left)(value)
    if (left === old.left) { return node }
    return { 
      left,
      value, 
      right: old.right,
    }
  }
  if (old.value < value) {
    const right = insert(old.right)(value)
    if (right === old.right) { return node }
    return { 
      left: old.left,
      value, 
      right,
    }
  }
  return node
}

module.exports = {
  /** @readonly */
  insert,
}
