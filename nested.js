// Language without nested functions

function static_func(a, b) {
  // no nested functions allowed
  return a + b
}

static_func(2, 3) // 5

// Language with nested functions

function add(a) {
  let x = a
  const y = x
  x = 5
  function f(b) {
    return y + b
  }
}

add(2)(3) // 5

// Translation

function static_add_f(self, b) {
  return self.y + b
}

function static_add(a) {
  let x = a
  const y = x
  x = 5
  return { self: { a, y }, func: static_add_f }
}

const f = static_add(2)
f.func(f.self, 2)
