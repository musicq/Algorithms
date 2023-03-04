/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (32.36%)
 * Likes:    24110
 * Dislikes: 1404
 * Total Accepted:    2.3M
 * Total Submissions: 7.1M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */

// @lc code=start
function longestPalindrome(s: string): string {
  let r = ''

  for (let i = 0; i < s.length; i++) {
    const a = maxPalindromeLength(i, i, s)
    const b = maxPalindromeLength(i, i + 1, s)
    const m = a.length > b.length ? a : b

    r = r.length > m.length ? r : m
  }

  return r
}

function maxPalindromeLength(l: number, r: number, s: string): string {
  let ret = ''
  if (l === r) {
    ret = s[l]
    l--
    r++
  }

  while (l >= 0 && r < s.length) {
    if (s[l] !== s[r]) break

    ret = s[l] + ret + s[r]
    l--
    r++
  }

  return ret
}
// @lc code=end
