/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (48.30%)
 * Likes:    2364
 * Dislikes: 150
 * Total Accepted:    227.9K
 * Total Submissions: 470.9K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 *
 * Given a binary tree, you need to compute the length of the diameter of the
 * tree. The diameter of a binary tree is the length of the longest path
 * between any two nodes in a tree. This path may or may not pass through the
 * root.
 *
 *
 *
 * Example:
 * Given a binary tree
 *
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \
 * ⁠     4   5
 *
 *
 *
 * Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 *
 * Note:
 * The length of path between two nodes is represented by the number of edges
 * between them.
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (root === null) return 0

  let max = [0]
  maxDiameter(root, max)
  return max[0]
}

function maxDiameter(root, max) {
  if (root === null) return 0

  let left = maxDiameter(root.left, max)
  let right = maxDiameter(root.right, max)

  max[0] = Math.max(max[0], left + right)

  return Math.max(left, right) + 1
}
// @lc code=end
