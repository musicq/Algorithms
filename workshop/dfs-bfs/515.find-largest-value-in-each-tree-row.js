/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
 *
 * https://leetcode.com/problems/find-largest-value-in-each-tree-row/description/
 *
 * algorithms
 * Medium (59.68%)
 * Likes:    703
 * Dislikes: 56
 * Total Accepted:    86.6K
 * Total Submissions: 144.6K
 * Testcase Example:  '[1,3,2,5,3,null,9]'
 *
 * You need to find the largest value in each row of a binary tree.
 *
 * Example:
 *
 * Input:
 *
 * ⁠         1
 * ⁠        / \
 * ⁠       3   2
 * ⁠      / \   \
 * ⁠     5   3   9
 *
 * Output: [1, 3, 9]
 *
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  if (root === null) return []

  let q = [root]
  let r = []

  while (q.length !== 0) {
    let len = q.length
    let max = Number.NEGATIVE_INFINITY
    
    while (len-- > 0) {
      let cur = q.shift()
      max = Math.max(cur.val, max)

      if (cur.left) q.push(cur.left)
      if (cur.right) q.push(cur.right)
    }

    r.push(max)
  }

  return r
}
// @lc code=end
