/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (60.08%)
 * Likes:    4319
 * Dislikes: 235
 * Total Accepted:    486K
 * Total Submissions: 806.7K
 * Testcase Example:  '3'
 *
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 *
 * For example, given n = 3, a solution set is:
 *
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return [];

  let r = [];
  generate(r, 0, 0, n, '');

  return r;
};

function generate(r, left, right, n, s) {
  // terminator
  if (left === n && right === n) {
    r.push(s);
    return;
  }

  // process
  // drill down
  if (left < n) {
    generate(r, left + 1, right, n, s + '(');
  }

  if (right < left) {
    generate(r, left, right + 1, n, s + ')');
  }

  // reverse state
}
// @lc code=end
