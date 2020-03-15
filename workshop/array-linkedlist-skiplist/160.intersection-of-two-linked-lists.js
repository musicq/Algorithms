/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 *
 * https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 *
 * algorithms
 * Easy (38.06%)
 * Likes:    2987
 * Dislikes: 330
 * Total Accepted:    408.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '8\n[4,1,8,4,5]\n[5,0,1,8,4,5]\n2\n3'
 *
 * Write a program to find the node at which the intersection of two singly
 * linked lists begins.
 *
 * For example, the following two linked lists:
 *
 *
 * begin to intersect at node c1.
 *
 *
 *
 * Example 1:
 *
 *
 *
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA =
 * 2, skipB = 3
 * Output: Reference of the node with value = 8
 * Input Explanation: The intersected node's value is 8 (note that this must
 * not be 0 if the two lists intersect). From the head of A, it reads as
 * [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2
 * nodes before the intersected node in A; There are 3 nodes before the
 * intersected node in B.
 *
 *
 *
 * Example 2:
 *
 *
 *
 * Input: intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3,
 * skipB = 1
 * Output: Reference of the node with value = 2
 * Input Explanation: The intersected node's value is 2 (note that this must
 * not be 0 if the two lists intersect). From the head of A, it reads as
 * [0,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes
 * before the intersected node in A; There are 1 node before the intersected
 * node in B.
 *
 *
 *
 *
 * Example 3:
 *
 *
 *
 * Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB =
 * 2
 * Output: null
 * Input Explanation: From the head of A, it reads as [2,6,4]. From the head of
 * B, it reads as [1,5]. Since the two lists do not intersect, intersectVal
 * must be 0, while skipA and skipB can be arbitrary values.
 * Explanation: The two lists do not intersect, so return null.
 *
 *
 *
 *
 * Notes:
 *
 *
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function
 * returns.
 * You may assume there are no cycles anywhere in the entire linked
 * structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;

  let l1 = getListLen(headA);
  let l2 = getListLen(headB);

  let long = l1 > l2 ? headA : headB;
  let short = l1 > l2 ? headB : headA;
  let difLen = Math.abs(l1 - l2);

  let tail = long;
  while (difLen-- > 0) {
    tail = tail.next;
  }

  let tailB = short;
  while (tail !== null && tailB !== null) {
    if (tail === tailB) return tail;
    tail = tail.next;
    tailB = tailB.next;
  }

  return null;
};

function getListLen(list) {
  let tail = list;
  let len = 0;

  while (tail !== null) {
    len++;
    tail = tail.next;
  }

  return len;
}
// @lc code=end

// Possible solutions
// 1. fill the 2 linkedlists in 2 stack respectively, get the first common node from back to front;
// 2. using a hash map to store all the nodes of the 1st linkedlist, iterate the 2nd linkedlist and find the first common node
// * 3. get the length of both linkedlists, go the different length first on the long one, then go together and find the first common node.
