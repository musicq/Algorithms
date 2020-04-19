/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 *
 * https://leetcode.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (33.94%)
 * Likes:    1430
 * Dislikes: 222
 * Total Accepted:    270.9K
 * Total Submissions: 797.1K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in
 * the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot
 * is trying to reach the bottom-right corner of the grid (marked 'Finish' in
 * the diagram below).
 *
 * Now consider if some obstacles are added to the grids. How many unique paths
 * would there be?
 *
 *
 *
 * An obstacle and empty space is marked as 1 and 0 respectively in the grid.
 *
 * Note: m and n will be at most 100.
 *
 * Example 1:
 *
 *
 * Input:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * Output: 2
 * Explanation:
 * There is one obstacle in the middle of the 3x3 grid above.
 * There are two ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down -> Down
 * 2. Down -> Down -> Right -> Right
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid) return 0

  let r = obstacleGrid.length
  if (r === 0) return 0
  let c = obstacleGrid[0].length

  let f = new Array(r)
  for (let i = 0; i < r; i++) {
    f[i] = new Array(c).fill(0)
  }

  f[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1

  // if there is a blocker before, then initialize 0 for the subsequences
  for (let i = 1; i < r; i++)
    f[i][0] = f[i - 1][0] === 0 ? 0 : obstacleGrid[i][0] === 0 ? 1 : 0
  for (let i = 1; i < c; i++)
    f[0][i] = f[0][i - 1] === 0 ? 0 : obstacleGrid[0][i] === 0 ? 1 : 0

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (obstacleGrid[i][j] === 1) f[i][j] = 0
      else f[i][j] = f[i - 1][j] + f[i][j - 1]
    }
  }

  return f[r - 1][c - 1]
}
// @lc code=end

var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid) return 0

  let r = obstacleGrid.length
  if (r === 0) return 0
  let c = obstacleGrid[0].length

  let f = new Array(r)
  for (let i = 0; i < r; i++) {
    f[i] = new Array(c).fill(0)
  }

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (!obstacleGrid[i - 1][j - 1]) f[i][j] = f[i - 1][j] + f[i][j - 1]
    }
  }

  return f[r - 1][c - 1]
}
