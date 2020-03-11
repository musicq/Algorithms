/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (25.76%)
 * Likes:    5758
 * Dislikes: 697
 * Total Accepted:    793.6K
 * Total Submissions: 3.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (!nums || nums.length < 3) {
    return [];
  }

  nums.sort((a, b) => a - b);

  if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];

  let r = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let L = i + 1;
    let R = nums.length - 1;

    while (L < R) {
      let s = nums[i] + nums[L] + nums[R];

      if (s === 0) {
        r.push([nums[i], nums[L], nums[R]]);

        // skip the same element
        while (nums[L] === nums[L + 1]) L++;
        while (nums[R] === nums[R - 1]) R--;

        L++;
        R--;
      } else if (s < 0) {
        L++;
      } else {
        R--;
      }
    }
  }

  return r;
};
// @lc code=end
