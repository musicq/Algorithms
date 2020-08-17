/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (51.88%)
 * Likes:    2053
 * Dislikes: 117
 * Total Accepted:    564.1K
 * Total Submissions: 1.1M
 * Testcase Example:  '"leetcode"'
 *
 * Given a string, find the first non-repeating character in it and return its
 * index. If it doesn't exist, return -1.
 *
 * Examples:
 *
 *
 * s = "leetcode"
 * return 0.
 *
 * s = "loveleetcode"
 * return 2.
 *
 *
 *
 *
 * Note: You may assume the string contains only lowercase English letters.
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let dic = new Array(26).fill(0)
  let a = 'a'.charCodeAt()

  for (const c of s) {
    dic[c.charCodeAt() - a]++
  }

  for (let i = 0; i < s.length; i++) {
    if (dic[s[i].charCodeAt() - a] === 1) return i
  }

  return -1
}
// @lc code=end
