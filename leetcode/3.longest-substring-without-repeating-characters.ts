/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.70%)
 * Likes:    32431
 * Dislikes: 1417
 * Total Accepted:    4.3M
 * Total Submissions: 12.7M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 *
 *
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const map: Record<string, number> = {}

  let max = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    const c = s[right]
    right++

    if (!map[c]) map[c] = 0
    map[c]++

    while (map[c] > 1) {
      const d = s[left]
      left++

      map[d]--
    }

    max = Math.max(max, right - left)
  }

  return max
}
// @lc code=end
