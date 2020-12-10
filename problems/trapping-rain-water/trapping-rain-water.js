/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 0) return 0

  let stack = []
  let sum = 0

  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[peek(stack)]) {
      let pop = stack.pop()

      if (stack.length === 0) break

      let top = peek(stack)
      let w = i - top - 1
      sum += (Math.min(height[i], height[top]) - height[pop]) * w
    }

    stack.push(i)
  }

  return sum
};

function peek(s) {
  return s[s.length - 1]
}