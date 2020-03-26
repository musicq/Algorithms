/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 *
 * https://leetcode.com/problems/largest-rectangle-in-histogram/description/
 *
 * algorithms
 * Hard (33.59%)
 * Likes:    2941
 * Dislikes: 75
 * Total Accepted:    229.5K
 * Total Submissions: 682.6K
 * Testcase Example:  '[2,1,5,6,2,3]'
 *
 * Given n non-negative integers representing the histogram's bar height where
 * the width of each bar is 1, find the area of largest rectangle in the
 * histogram.
 *
 *
 *
 *
 * Above is a histogram where width of each bar is 1, given height =
 * [2,1,5,6,2,3].
 *
 *
 *
 *
 * The largest rectangle is shown in the shaded area, which has area = 10
 * unit.
 *
 *
 *
 * Example:
 *
 *
 * Input: [2,1,5,6,2,3]
 * Output: 10
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights || heights.length === 0) return 0;

  let stack = [-1];
  let area = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
      area = Math.max(area, heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
    }

    stack.push(i);
  }

  while (stack[stack.length - 1] !== -1) {
    area = Math.max(area, heights[stack.pop()] * (heights.length - 1 - stack[stack.length - 1]));
  }

  return area;
};
// @lc code=end
