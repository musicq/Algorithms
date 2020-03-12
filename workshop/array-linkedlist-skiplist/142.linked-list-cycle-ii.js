/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 *
 * https://leetcode.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (35.40%)
 * Likes:    2155
 * Dislikes: 176
 * Total Accepted:    280.9K
 * Total Submissions: 793.1K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * Given a linked list, return the node where the cycle begins. If there is no
 * cycle, return null.
 *
 * To represent a cycle in the given linked list, we use an integer pos which
 * represents the position (0-indexed) in the linked list where tail connects
 * to. If pos is -1, then there is no cycle in the linked list.
 *
 * Note: Do not modify the linked list.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: tail connects to node index 1
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * second node.
 *
 *
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2], pos = 0
 * Output: tail connects to node index 0
 * Explanation: There is a cycle in the linked list, where tail connects to the
 * first node.
 *
 *
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1], pos = -1
 * Output: no cycle
 * Explanation: There is no cycle in the linked list.
 *
 *
 *
 *
 *
 *
 * Follow-up:
 * Can you solve it without using extra space?
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
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;

  let sp = head;
  let fp = head;
  let isCycle = false;

  while (fp !== null && fp.next !== null) {
    sp = sp.next;
    fp = fp.next.next;

    if (sp === fp) {
      isCycle = true;
      break;
    }
  }

  if (!isCycle) return null;

  sp = head;
  while (sp !== fp) {
    sp = sp.next;
    fp = fp.next;
  }

  return sp;
};
// @lc code=end

// Thought:
// 剑指offer No.23
// Find the meet node first
// then continue loop and count the total nodes number
// then let the slow pointer go

// details each step
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;

  let sp = head;
  let fp = sp.next.next;
  let meetPoint = null;
  let nodes = 0;

  while (fp && fp.next && fp.next.next) {
    if (meetPoint) {
      nodes += 1;
    }

    // look for the meet point
    if (sp === fp) {
      // already met, then break the loop
      if (meetPoint) {
        break;
      }

      meetPoint = sp;
    }

    sp = sp.next;
    fp = fp.next.next;
  }

  // no loop
  if (!meetPoint) return null;

  sp = head;
  fp = sp;

  let i = 0;
  while (i < nodes) {
    fp = fp.next;
    i++;
  }

  while (fp && fp.next) {
    if (sp === fp) return sp;

    sp = sp.next;
    fp = fp.next;
  }
};
