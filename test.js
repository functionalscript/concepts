const i = require('.')

let root = undefined

for (let k = 0; k < 100; k++) {
  root = i.insert(root)((k * k).toString())
}

console.log(JSON.stringify(root, undefined, 2))
