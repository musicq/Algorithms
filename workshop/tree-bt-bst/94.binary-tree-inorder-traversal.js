/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (60.98%)
 * Likes:    2544
 * Dislikes: 108
 * Total Accepted:    641.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 *
 * Example:
 *
 *
 * Input: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * Output: [1,3,2]
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
var inorderTraversal = function(root) {
  if (root === null) return [];

  let r = [];
  let s = [];

  while (root !== null || s.length !== 0) {
    while (root !== null) {
      s.push(root);
      root = root.left;
    }

    root = s.pop();
    r.push(root.val);
    root = root.right;
  }

  return r;
};
// @lc code=end

// recursive
var inorderTraversal = function(root) {
  let r = [];
  traversal(root, r);
  return r;
};

function traversal(root, r) {
  if (root === null) return;

  traversal(root.left, r);
  r.push(root.val);
  traversal(root.right, r);
}
