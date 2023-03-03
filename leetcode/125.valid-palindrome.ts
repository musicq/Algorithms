/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 *
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (43.21%)
 * Likes:    6155
 * Dislikes: 6725
 * Total Accepted:    1.8M
 * Total Submissions: 4.1M
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads the
 * same forward and backward. Alphanumeric characters include letters and
 * numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric
 * characters.
 * Since an empty string reads the same forward and backward, it is a
 * palindrome.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 2 * 10^5
 * s consists only of printable ASCII characters.
 *
 *
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let i = 0
  let j = s.length - 1

  while (i <= j) {
    if (!isValid(s[i])) {
      i++
      continue
    }
    if (!isValid(s[j])) {
      j--
      continue
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false
    }

    i++
    j--
  }

  return true
}

function isValid(s: string): boolean {
  const code = s.charCodeAt(0)

  return (
    // 1-9
    (48 <= code && code <= 57) ||
    // A-Z
    (65 <= code && code <= 90) ||
    // a-z
    (97 <= code && code <= 122)
  )
}
// @lc code=end
