/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 *
 * https://leetcode.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (40.93%)
 * Likes:    2692
 * Dislikes: 159
 * Total Accepted:    231.3K
 * Total Submissions: 564.3K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * Given an array nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k
 * numbers in the window. Each time the sliding window moves right by one
 * position. Return the max sliding window.
 *
 * Example:
 *
 *
 * Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 *
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 *
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty
 * array.
 *
 * Follow up:
 * Could you solve it in linear time?
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if (!nums || nums.length * k === 0) return [];
  if (k === 1) return nums;

  let n = nums.length;
  let r = new Array(n - k + 1);
  let idx = 0;
  let q = [];

  for (let i = 0; i < n; i++) {
    while (q.length > 0 && q[0] < i - k + 1) {
      q.shift();
    }

    while (q.length > 0 && nums[q[q.length - 1]] < nums[i]) {
      q.pop();
    }

    q.push(i);
    if (i >= k - 1) {
      r[idx++] = nums[q[0]];
    }
  }

  return r;
};
// @lc code=end
