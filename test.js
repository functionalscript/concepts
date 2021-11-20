const i = require('.')

let root = undefined
root = i.insert(root)('hello world!')
root = i.insert(root)('a')

console.log(root)
