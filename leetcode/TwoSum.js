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
var twoSum = function(nums, target) {
    let map = new Map();
    let i = 0;

    while (i < nums.length) {
        const num = nums[i];
        const k = map.get(target - num);

        if (k !== undefined) {
            return [k, i];
        }

        map.set(num, i);
        i += 1;
    }
};
