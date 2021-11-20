/**
 * @typedef {{
 *  left: TNode
 *  value: string
 *  right: TNode
 * }} TNode
 */

/** @type {(node: TNode) => (vale: string) => TNode} */
const insert = node => value => {
  if (node.value === value) { return node }
}

module.exports = 'Hello world!'
