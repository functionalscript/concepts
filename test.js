const i = require('.')
const { add3, add4 } = require('./let')

let root = undefined

for (let k = 0; k < 100; k++) {
  root = i.insert(root)((k * k).toString())
}

console.log(JSON.stringify(root, undefined, 2))

console.log(`add3: ${add3(2)(2)}`)
console.log(`add4: ${add4(2)(2)}`)
