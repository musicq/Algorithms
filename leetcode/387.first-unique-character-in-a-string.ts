/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (58.69%)
 * Likes:    7429
 * Dislikes: 253
 * Total Accepted:    1.4M
 * Total Submissions: 2.3M
 * Testcase Example:  '"leetcode"'
 *
 * Given a string s, find the first non-repeating character in it and return
 * its index. If it does not exist, return -1.
 *
 *
 * Example 1:
 * Input: s = "leetcode"
 * Output: 0
 * Example 2:
 * Input: s = "loveleetcode"
 * Output: 2
 * Example 3:
 * Input: s = "aabb"
 * Output: -1
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const a = 'a'.charCodeAt(0)
  const f: number[] = new Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    f[s[i].charCodeAt(0) - a]++
  }

  for (let i = 0; i < s.length; i++) {
    if (f[s[i].charCodeAt(0) - a] === 1) return i
  }

  return -1
}
// @lc code=end
