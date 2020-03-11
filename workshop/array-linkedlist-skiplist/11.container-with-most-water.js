/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (49.07%)
 * Likes:    5019
 * Dislikes: 524
 * Total Accepted:    562.7K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *
 *
 *
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 *
 *
 * Example:
 *
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (!height || height.length < 2) return 0;

  let r = 0;

  let j = height.length - 1;
  let i = 0;

  while (i < j) {
    let w = j - i;
    let h = 0;

    if (height[i] < height[j]) {
      h = height[i];
      i++;
    } else {
      h = height[j];
      j--;
    }

    r = Math.max(h * w, r);
  }

  return r;
};
// @lc code=end

// Thought
// Using 2 pointers, one at start, one at end. Add start pointer, reduce end pointer.
// Choose the min one between 2 pointers as the container's height.
// Calculate the area.