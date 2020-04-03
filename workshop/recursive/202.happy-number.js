/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (48.71%)
 * Likes:    1710
 * Dislikes: 371
 * Total Accepted:    399.9K
 * Total Submissions: 802.4K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 *
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 *
 * Example:
 *
 *
 * Input: 19
 * Output: true
 * Explanation:
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (!n || n === 0) return false;
  if (n === 1) return true;

  let slow = (fast = n);

  do {
    slow = square(slow);
    fast = square(fast);
    fast = square(fast);
  } while (slow !== fast);

  if (slow === 1) return true;

  return false;
};

function square(n) {
  let r = 0;

  while (n !== 0) {
    let i = n % 10;
    r += i * i;
    n = Math.floor(n / 10);
  }

  return r;
}
// @lc code=end
