package lc198

/*
 * @lc app=leetcode id=198 lang=golang
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (41.63%)
 * Likes:    4122
 * Dislikes: 124
 * Total Accepted:    470.9K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 *
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 *
 * Example 1:
 *
 *
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 *
 * Example 2:
 *
 *
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 *
 *
 */

// @lc code=start
func rob(nums []int) int {
	prevMax := 0
	curMax := 0

	for _, x := range nums {
		t := curMax
		curMax = max(prevMax + x, curMax)
		prevMax = t
	}

	return curMax
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}

// @lc code=end

// f[i] = max(f[i-1] + 0, f[i-2] + cur)

func rob1(nums []int) int {
	n := len(nums)

	if n == 0 {
		return 0
	}

	if n == 1 {
		return nums[0]
	}

	f := make([]int, n)

	f[0] = nums[0]
	f[1] = max(nums[0], nums[1])

	for i := 2; i < n; i++ {
		f[i] = max(f[i-1], f[i-2]+nums[i])
	}

	return f[n-1]
}