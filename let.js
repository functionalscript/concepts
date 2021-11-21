const add = a => b => a + b

const add2 = a => {
  const x = a
  return b => x + b
}

const add3 = a => {
  let x = a
  return b => x + b // ERROR!
}

const add3 = a => {
  let x = a
  const y = x
  return b => y + b // ok
}
