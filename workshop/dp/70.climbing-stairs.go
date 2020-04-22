package dp

/*
 * @lc app=leetcode id=70 lang=golang
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (46.21%)
 * Likes:    3482
 * Dislikes: 114
 * Total Accepted:    584.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '2'
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 * Note: Given n will be a positive integer.
 *
 * Example 1:
 *
 *
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 * Example 2:
 *
 *
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 */

// @lc code=start
func climbStairs(n int) int {
	if n <= 2 {
		return n
	}

	pre1 := 1
	pre2 := 2
	r := 0

	for i := 3; i <= n; i++ {
		r = pre1 + pre2
		pre1 = pre2
		pre2 = r
	}

	return r
}

// @lc code=end

func climbStairs1(n int) int {
	if n <= 2 {
		return n
	}

	f := make([]int, n+1)

	f[1] = 1
	f[2] = 2

	for i := 3; i < n+1; i++ {
		f[i] = f[i-1] + f[i-2]
	}

	return f[n]
}
