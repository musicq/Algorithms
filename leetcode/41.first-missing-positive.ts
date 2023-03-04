/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 *
 * https://leetcode.com/problems/first-missing-positive/description/
 *
 * algorithms
 * Hard (36.43%)
 * Likes:    13321
 * Dislikes: 1561
 * Total Accepted:    844.6K
 * Total Submissions: 2.3M
 * Testcase Example:  '[1,2,0]'
 *
 * Given an unsorted integer array nums, return the smallest missing positive
 * integer.
 *
 * You must implement an algorithm that runs in O(n) time and uses constant
 * extra space.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,2,0]
 * Output: 3
 * Explanation: The numbers in the range [1,2] are all in the array.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,4,-1,1]
 * Output: 2
 * Explanation: 1 is in the array but 2 is missing.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 * Explanation: The smallest positive integer 1 is missing.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^5
 * -2^31 <= nums[i] <= 2^31 - 1
 *
 *
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  const n = nums.length

  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      // can't reverse the order, since nums[i] will change when used second time
      ;[nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]]
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) return i + 1
  }

  return n + 1
}
// @lc code=end
