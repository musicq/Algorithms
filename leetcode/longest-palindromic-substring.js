/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * 1. ccc
 * 2. aba
 * 3. wefqabbasdfw
 * 4. sfwqwfkkwwqqww
 */
function longestPalindrome(s) {
  if (!s) {
    return '';
  }

  let start = (end = 0);
  for (let i = 0; i < s.length; i++) {
    const len1 = expandStr(s, i, i);
    const len2 = expandStr(s, i, i + 1);
    const len = len1 > len2 ? len1 : len2;

    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = start + len;
    }
  }

  return s.substring(Math.ceil(start), Math.ceil(end));
}

function expandStr(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}
