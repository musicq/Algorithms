/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (48.43%)
 * Likes:    1806
 * Dislikes: 154
 * Total Accepted:    416.7K
 * Total Submissions: 860.3K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 *
 *
 *
 * Example:
 *
 *
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let dummy = { next: head };
  let pointer = dummy;

  while (pointer.next !== null && pointer.next.next !== null) {
    let first = pointer.next;
    let second = pointer.next.next;
    first.next = second.next;
    pointer.next = second;
    pointer.next.next = first;
    pointer = pointer.next.next;
  }

  return dummy.next;
};
// @lc code=end

// Recursive
var swapPairs = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let n = head.next;
  head.next = swapPairs(head.next.next);
  n.next = head;

  return n;
};
