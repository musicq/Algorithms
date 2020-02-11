// @ts-check
/**
 * @link{https://leetcode.com/problems/add-two-numbers/#/description}
 *
 * @Description
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/* Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @example const linkedList = [2->1->7]
 * const fir = linkedList;
 * fir.val === 2; // true
 * const sec = fir.next;
 * sec.val === 1; // true
 * const thir = sec.next;
 * thir.val === 7; // true
 *
 * @test
 * [2 -> 4 -> 3] + [5 -> 6 -> 4] === [7 -> 0 -> 8]
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function ListNodeFactory(arr) {
  let r = null;
  if (!arr.length) return [];
  r = new ListNode(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    r.next = ListNodeFactory(arr.splice(1));
  }
  return r;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let sentinel = {val: 0, next: null};
  let p = sentinel;
  let sum = 0;

  while (l1 || l2) {
    sum = parseInt(sum/10);

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    p.next = {val: sum % 10, next: null};
    p = p.next;
  }

  if (sum >= 10)
    p.next = {val: 1, next: null};

  return sentinel.next;
};

const a = ListNodeFactory([9, 4, 3]);
const b = ListNodeFactory([5, 7, 9]);

console.log(addTwoNumbers(a, b));
