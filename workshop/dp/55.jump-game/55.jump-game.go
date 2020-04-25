package lc55

/*
 * @lc app=leetcode id=55 lang=golang
 *
 * [55] Jump Game
 *
 * https://leetcode.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (33.28%)
 * Likes:    3464
 * Dislikes: 297
 * Total Accepted:    406.1K
 * Total Submissions: 1.2M
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 *
 * Each element in the array represents your maximum jump length at that
 * position.
 *
 * Determine if you are able to reach the last index.
 *
 * Example 1:
 *
 *
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last
 * index.
 *
 *
 * Example 2:
 *
 *
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its
 * maximum
 * jump length is 0, which makes it impossible to reach the last index.
 *
 *
 */

// @lc code=start
func canJump(nums []int) bool {
	n := len(nums)
	lastPos := n - 1

	for i := n - 2; i >= 0; i-- {
		if nums[i]+i >= lastPos {
			lastPos = i
		}
	}

	return lastPos == 0
}

// @lc code=end

func canJump1(nums []int) bool {
	// furthur pos can reach
	max := 0

	for i := 0; i < len(nums); i++ {
		if i > max {
			return false
		}

		if max < i+nums[i] {
			max = i + nums[i]
		}
	}

	return true
}
