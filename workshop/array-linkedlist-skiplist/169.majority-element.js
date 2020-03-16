/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (56.05%)
 * Likes:    2535
 * Dislikes: 207
 * Total Accepted:    518.5K
 * Total Submissions: 925.1K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 *
 * Example 1:
 *
 *
 * Input: [3,2,3]
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  if (!nums || nums.length === 0) return 0;

  let target = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === target) count++;
    else count--;

    if (count === 0) {
      target = nums[i];
      count++;
    }
  }

  return target;
};
// @lc code=end
