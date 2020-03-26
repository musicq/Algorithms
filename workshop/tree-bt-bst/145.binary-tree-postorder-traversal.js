/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (52.63%)
 * Likes:    1423
 * Dislikes: 72
 * Total Accepted:    339.6K
 * Total Submissions: 643.6K
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the postorder traversal of its nodes' values.
 *
 * Example:
 *
 *
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * Output: [3,2,1]
 *
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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
var postorderTraversal = function(root) {
  if (root === null) return [];

  let s = [];
  let r = [];

  while (root !== null || s.length !== 0) {
    if (root !== null) {
      s.push(root);
      r.push(root.val);
      root = root.right;
    } else {
      root = s.pop();
      root = root.left;
    }
  }

  return r.reverse();
};
// @lc code=end
