package w52

/*
 *Description:
 * Given a binary tree where each path going from the root to any leaf form
 * a valid sequence, check if a given string is a valid sequence
 * in such binary tree.
 * We get the given string from the concatenation of an array of integers
 * arr and the concatenation of all values of the nodes along a path results
 * in a sequence in the given binary tree.
 *
 * Example:
 *
 * Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
 * Output: true
 * Explanation:
 * The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure).
 * Other valid sequences are:
 * 0 -> 1 -> 1 -> 0
 * 0 -> 0 -> 0
 *
 * Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
 * Output: false
 * Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.
 *
 * Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
 * Output: false
 * Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.
 *
 * Constraints:
 *
 * 1 <= arr.length <= 5000
 * 0 <= arr[i] <= 9
 * Each node's value is between [0 - 9].
 */

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

// DFS solution
func isValidSequenceDFS(root *TreeNode, arr []int) bool {
	if root == nil || len(arr) == 0 {
		return false
	}

	if root.Left == nil && root.Right == nil {
		return len(arr) == 1 && root.Val == arr[0]
	}

	if root.Val != arr[0] {
		return false
	}

	left := isValidSequenceDFS(root.Left, arr[1:])
	right := isValidSequenceDFS(root.Right, arr[1:])

	return left || right
}

// BFS solution
func isValidSequenceBFS(root *TreeNode, arr []int) bool {
	if root == nil || len(arr) == 0 {
		return false
	}
	type m struct {
		node *TreeNode
		dep  int
	}

	queue := []m{{node: root, dep: 0}}

	for len(queue) != 0 {
		cur := queue[0]
		queue = queue[1:]

		node := cur.node
		dep := cur.dep

		if dep >= len(arr) {
			return false
		}

		if node.Val == arr[dep] {
			if node.Left == nil && node.Right == nil && dep == len(arr)-1 {
				return true
			}

			if node.Left != nil {
				queue = append(queue, m{node: node.Left, dep: dep + 1})
			}

			if node.Right != nil {
				queue = append(queue, m{node: node.Right, dep: dep + 1})
			}
		}
	}

	return false
}
