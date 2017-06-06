// @ts-check
/**
 * @link{https://leetcode.com/problems/two-sum/#/description}
 *
 * @Description
 *
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * @example
 * ```
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * ```
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      } else {
        continue;
      }
    }
  }
}

const nums = [3, 11, 2, 7, 15];
const target = 9;

const r = twoSum(nums, target);

console.log(r);
