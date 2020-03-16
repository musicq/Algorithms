/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 *
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/description/
 *
 * algorithms
 * Hard (40.29%)
 * Likes:    690
 * Dislikes: 191
 * Total Accepted:    161.6K
 * Total Submissions: 401.2K
 * Testcase Example:  '[1,3,5]'
 *
 * Suppose an array sorted in ascending order is rotated at some pivot unknown
 * to you beforehand.
 *
 * (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
 *
 * Find the minimum element.
 *
 * The array may contain duplicates.
 *
 * Example 1:
 *
 *
 * Input: [1,3,5]
 * Output: 1
 *
 * Example 2:
 *
 *
 * Input: [2,2,2,0,1]
 * Output: 0
 *
 * Note:
 *
 *
 * This is a follow up problem to Find Minimum in Rotated Sorted Array.
 * Would allow duplicates affect the run-time complexity? How and why?
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (!nums || nums.length === 0) return;

  let lo = 0;
  let hi = nums.length - 1;
  let m = 0;

  while (lo < hi) {
    m = lo + ((hi - lo) >> 1);

    if (nums[m] > nums[hi]) lo = m + 1;
    else if (nums[m] < nums[hi]) hi = m;
    else hi--;
  }

  return nums[lo];
};
// @lc code=end
