const i = require('.')

let root = undefined
root = i.insert(root)('hello world!')
root = i.insert(root)('a')
root = i.insert(root)('b')

console.log(root)
