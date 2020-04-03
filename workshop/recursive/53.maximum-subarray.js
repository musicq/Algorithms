/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (45.77%)
 * Likes:    6776
 * Dislikes: 306
 * Total Accepted:    849.4K
 * Total Submissions: 1.8M
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * Given an integer array nums, find the contiguous subarray (containing at
 * least one number) which has the largest sum and return its sum.
 *
 * Example:
 *
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 *
 * Follow up:
 *
 * If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (!nums || nums.length === 0) return 0;

  let n = nums.length;
  let f = new Array(n);
  f[0] = nums[0];
  let max = f[0];

  for (let i = 1; i < n; i++) {
    f[i] = nums[i] + (f[i - 1] > 0 ? f[i - 1] : 0);
    max = Math.max(max, f[i]);
  }

  return max;
};
// @lc code=end
