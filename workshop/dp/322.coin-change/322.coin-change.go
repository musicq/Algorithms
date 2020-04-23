package lc322

/*
 * @lc app=leetcode id=322 lang=golang
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (33.76%)
 * Likes:    3351
 * Dislikes: 118
 * Total Accepted:    352.2K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 *
 * Example 1:
 *
 *
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 *
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 *
 */

// @lc code=start
func coinChange(coins []int, amount int) int {
	f := make([]int, amount+1)
	f[0] = 0
	MAX := amount + 1

	for i := 1; i <= amount; i++ {
		f[i] = MAX
		for j := 0; j < len(coins); j++ {
			if i >= coins[j] {
				f[i] = min(f[i-coins[j]]+1, f[i])
			}
		}
	}

	if f[amount] == MAX {
		return -1
	}

	return f[amount]
}

func min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}

// @lc code=end

// f[i] = min(f[i-1], f[i-2], f[i-5]) + 1
