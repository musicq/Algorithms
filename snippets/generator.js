function* generateRange(end, start = 0, step = 1) {
  let x = start - step
  while (x < end - step) yield x += step
}

const gen5 = generateRange(5)

let x

while (!(x = gen5.next()).done) {
  console.log(x.value)
}

// ===========

const iterable = {
  a: 'hi',
  b: 'yo',

  [Symbol.iterator]: function*() {
    yield this.a
    yield 2
  }
}

console.log([...iterable])