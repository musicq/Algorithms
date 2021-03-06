/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) return [];

  let r = [];
  let q = [root];

  while (q.length !== 0) {
    let t = [];
    let n = q.length;

    while (n-- > 0) {
      let node = q.shift();
      t.push(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    r.push(t);
  }

  return r;
};
