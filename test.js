const i = require('.')

let root = undefined
root = i.insert(root)('hello world!')('second value')
root = i.insert(root)('a')

console.log(root)
