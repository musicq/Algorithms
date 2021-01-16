/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 *
 * https://leetcode.com/problems/n-queens/description/
 *
 * algorithms
 * Hard (49.02%)
 * Likes:    2522
 * Dislikes: 96
 * Total Accepted:    234.2K
 * Total Submissions: 477.6K
 * Testcase Example:  '4'
 *
 * The n-queens puzzle is the problem of placing n queens on an n x n
 * chessboard such that no two queens attack each other.
 *
 * Given an integer n, return all distinct solutions to the n-queens puzzle.
 *
 * Each solution contains a distinct board configuration of the n-queens'
 * placement, where 'Q' and '.' both indicate a queen and an empty space,
 * respectively.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4
 * Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 * Explanation: There exist two distinct solutions to the 4-queens puzzle as
 * shown above
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1
 * Output: [["Q"]]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 9
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let result = []

  dive(0, n, [], result)

  return result
}

function dive(row, n, res, result) {
  if (row === n) {
    result.push(res.slice())
    return
  }

  for (let c = 0; c < n; c++) {
    if (isValid(row, c, n, res)) {
      let v = new Array(n)
      v[c] = 'Q'
      res[row] = v.join('.')

      dive(row + 1, n, res, result)
    }
  }
}

function isValid(row, c, n, res) {
  let leftTop = c - 1
  let rightTop = c + 1

  for (let r = row - 1; r >= 0; r--) {
    if (res[r][c] === 'Q') return false
    if (leftTop >= 0 && res[r][leftTop] === 'Q') return false
    if (rightTop < n && res[r][rightTop] === 'Q') return false
    leftTop--
    rightTop++
  }

  return true
}
// @lc code=end
