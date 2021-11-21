const add = a => b => a + b

const add2 = a => {
  const x = a
  return b => x + b
}

const add3 = a => {
  let x = a
  x = 5
  return b => x + b // ERROR!
}

const add4 = a => {
  let x = a
  const y = x
  x = 5
  return b => y + b // ok
}

module.exports = {
  add3,
  add4,
}
