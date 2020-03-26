/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 *
 * https://leetcode.com/problems/subsets/description/
 *
 * algorithms
 * Medium (58.22%)
 * Likes:    3026
 * Dislikes: 72
 * Total Accepted:    498.8K
 * Total Submissions: 854.3K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a set of distinct integers, nums, return all possible subsets (the
 * power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * Example:
 *
 *
 * Input: nums = [1,2,3]
 * Output:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  if (!nums || nums.length === 0) return [];

  let r = [];

  backtrack(nums, 0, r, []);

  return r;
};

function backtrack(A, start, r, t) {
  r.push(t.slice());

  for (let j = start; j < A.length; j++) {
    t.push(A[j]);
    backtrack(A, j + 1, r, t);
    t.pop();
  }
}
// @lc code=end

// NOTICE:
// Line 55, need to copy the array instead of using a reference.
// Or the value will be modified and get the wrong result
