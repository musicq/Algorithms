/**
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
    r.next = new ListNodeFactory(arr.splice(1));
  }
  return r;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result = [];
  while (l1 || l2) {
    let t = (l1.val ? l1.val : 0) + (l2.val ? l2.val : 0);
    if (t >= 10) {
      if (l1.next) {
        l1.next.val += 1;
      } else {
        l1.next = { val: 1, next: null };
        l2.next = { val: 0, next: null };
      }
      t %= 10;
    }
    result.push(t);
    l1 = l1.next;
    l2 = l2.next;
  }

  return result;
};

const a = ListNodeFactory([9, 4, 3]);
const b = ListNodeFactory([5, 7, 9]);

console.log(addTwoNumbers(a, b));
