const myFunc = a => b => a + b

const myFunc2 = a => {
  const x = a
  return b => x + b
}
