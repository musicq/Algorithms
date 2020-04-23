package lc152

/*
 * @lc app=leetcode id=152 lang=golang
 *
 * [152] Maximum Product Subarray
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * algorithms
 * Medium (30.92%)
 * Likes:    3508
 * Dislikes: 144
 * Total Accepted:    305.1K
 * Total Submissions: 982.2K
 * Testcase Example:  '[2,3,-2,4]'
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 *
 * Example 1:
 *
 *
 * Input: [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 *
 *
 * Example 2:
 *
 *
 * Input: [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 *
 */

// @lc code=start
func maxProduct(nums []int) int {
	r := nums[0]
	min := r
	max := r

	for i := 1; i < len(nums); i++ {
		if nums[i] < 0 {
			min, max = max, min
		}

		max = Max(nums[i], nums[i]*max)
		min = Min(nums[i], nums[i]*min)

		r = Max(r, max)
	}

	return r
}

func Max(a int, b int) int {
	if a > b {
		return a
	}

	return b
}

func Min(a int, b int) int {
	if a < b {
		return a
	}

	return b
}

// @lc code=end
