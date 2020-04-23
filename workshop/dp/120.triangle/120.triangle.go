package lc120

/*
 * @lc app=leetcode id=120 lang=golang
 *
 * [120] Triangle
 *
 * https://leetcode.com/problems/triangle/description/
 *
 * algorithms
 * Medium (42.48%)
 * Likes:    1706
 * Dislikes: 206
 * Total Accepted:    231.5K
 * Total Submissions: 540.1K
 * Testcase Example:  '[[2],[3,4],[6,5,7],[4,1,8,3]]'
 *
 * Given a triangle, find the minimum path sum from top to bottom. Each step
 * you may move to adjacent numbers on the row below.
 *
 * For example, given the following triangle
 *
 *
 * [
 * ⁠    [2],
 * ⁠   [3,4],
 * ⁠  [6,5,7],
 * ⁠ [4,1,8,3]
 * ]
 *
 *
 * The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 *
 * Note:
 *
 * Bonus point if you are able to do this using only O(n) extra space, where n
 * is the total number of rows in the triangle.
 *
 */

// @lc code=start
func minimumTotal(triangle [][]int) int {
	n := len(triangle)
	f := triangle[n-1]

	// 自倒数第二行向上累加
	for i := n - 2; i >= 0; i-- {
		for j := 0; j <= i; j++ {
			f[j] = min(f[j], f[j+1]) + triangle[i][j]
		}
	}

	return f[0]
}

func min(a int, b int) int {
	if a < b {
		return a
	}

	return b
}

// @lc code=end

// f[i][j] = min(f[i-1][j],f[i-1][j-1]

func minimumTotal1(triangle [][]int) int {
	rows := len(triangle)
	if rows == 0 {
		return 0
	}

	f := make([][]int, rows)
	for i := range f {
		f[i] = make([]int, i+1)
	}

	for i := 0; i < rows; i++ {
		for j := 0; j < i+1; j++ {
			if i == 0 && j == 0 {
				// top element
				f[i][i] = triangle[i][j]
			} else if j == 0 {
				// left side
				f[i][j] = triangle[i][j] + f[i-1][0]
			} else if i == j {
				// right side
				f[i][j] = triangle[i][j] + f[i-1][j-1]
			} else {
				f[i][j] = triangle[i][j] + min(f[i-1][j], f[i-1][j-1])
			}
		}
	}

	min := int(^uint(0) >> 1)
	for _, v := range f[rows-1] {
		if v < min {
			min = v
		}
	}
	return min
}
