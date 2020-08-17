/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (59.88%)
 * Likes:    3662
 * Dislikes: 81
 * Total Accepted:    850K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 *
 * Example:
 *
 *
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 *
 *
 * Follow up:
 *
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
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
var reverseList = function (head) {
  return reverse(head, null)
}

function reverse(head, prev) {
  if (!head) return prev

  let next = head.next
  head.next = prev
  prev = head

  return reverse(next, prev)
}
// @lc code=end

// Iteration solution
var reverseList = function (head) {
  if (head === null) return head

  let prev = null
  let p = head

  while (p !== null) {
    let next = p.next
    p.next = prev
    prev = p
    p = next
  }

  return prev
}
