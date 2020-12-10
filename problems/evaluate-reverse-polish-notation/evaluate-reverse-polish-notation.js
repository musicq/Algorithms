/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []

  for (const s of tokens) {
    if (!isNaN(+s)) {
      stack.push(+s)
      continue
    }

    let a = stack.pop()
    let b = stack.pop()

    if (s === '+') {
      r = b + a
    } else if (s === '-') {
      r = b - a
    } else if (s === '*') {
      r = b * a
    } else if (s === '/') {
      r = parseInt(b / a)
    }

    stack.push(r)
  }

  return stack.pop()
};