/** @type {(a: number) => (b: number) => number} */
const add = a => b => a + b

/** @type {(a: number) => (b: number) => number} */
const add2 = a => {
  const x = a
  return b => x + b
}

/** @type {(a: number) => (b: number) => number} */
const add3 = a => {
  let x = a
  x = 5
  return b => x + b // ERROR!
}

/** @type {(a: number) => (b: number) => number} */
const add4 = a => {
  let x = a
  const y = x
  x = 5
  return b => y + b // ok
}

/** @type {() => readonly[() => number, () => number]} */
const twoFunctions = () => {
  let x = 0
  return [
    () => { x = x + 1; return x },
    () => { x = x - 2; return x },
  ]
}

module.exports = {
  add3,
  add4,
  twoFunctions,
}
