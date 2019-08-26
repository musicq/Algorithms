import * as assert from 'assert';
import LinkList, { LinkNode } from '../../data-structure/LinkList/LinkList';
import { time } from '../../utils/timeCount';

function checkPalindrome(str: LinkNode<string>): boolean {
  if (!str) {
    return false;
  }

  if (!str.next) {
    return Boolean(str.value != undefined);
  }

  // two words
  if (!str.next.next) {
    return str.value === str.next.value;
  }

  let sp: LinkNode<string> | undefined = str;
  let fp: LinkNode<string> | undefined = str;
  let lastP: LinkNode<string> | undefined;

  while (sp.next) {
    fp = fp!.next!.next;
    // store next node
    let np: LinkNode<string> = sp.next;
    // reverse link next node
    sp.next = lastP;
    // reassign last pointer to current node
    lastP = sp;
    // set sp to next pointer to move on
    sp = np;

    // odd
    // abcba
    // -sf--
    // --s-f
    if (!fp!.next) {
      // move sp to next point
      sp = sp.next;
      break;
    } else if (!fp!.next.next) {
      // even
      // abccba
      // -sf---
      // --s-f-
      sp = sp.next;
      // reset last pointer to current node
      np.next = lastP;
      lastP = np;
      break;
    }
  }

  while (sp && lastP) {
    if (sp.value === lastP.value) {
      sp = sp.next;
      lastP = lastP.next;
      continue;
    } else {
      return false;
    }
  }

  return true;
}

const fn = time(checkPalindrome);

assert(!fn(LinkList.from(''.split(''))));
assert(fn(LinkList.from('a'.split(''))));
assert(fn(LinkList.from('bb'.split(''))));
assert(fn(LinkList.from('aabbaabbaa'.split(''))));
assert(fn(LinkList.from('abcwewcba'.split(''))));
assert(!fn(LinkList.from('cqcqcaqweiasdf'.split(''))));
