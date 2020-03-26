/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (47.01%)
 * Likes:    5855
 * Dislikes: 107
 * Total Accepted:    444.5K
 * Total Submissions: 944.4K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 *
 *
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 *
 * Example:
 *
 *
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (!height || height.length === 0) return 0;

  let s = [];
  let ans = 0;

  for (let i = 0; i < height.length; i++) {
    while (s.length > 0 && height[i] > height[s[s.length - 1]]) {
      let top = s.pop();

      if (s.length === 0) break;

      let peek = s[s.length - 1];

      let w = i - peek - 1;
      ans += w * (Math.min(height[i], height[peek]) - height[top]);
    }

    s.push(i);
  }

  return ans;
};
// @lc code=end
