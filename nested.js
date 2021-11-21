// Language without nested functions

function static_func(a, b) {
  // no nested functions allowed
  return a + b
}

static_func(2, 3) // 5

// Language with nested functions

function add(a) {
  function f(b) {
    return a + b
  }
}

add(2)(3) // 5

// Translation

