/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (55.32%)
 * Likes:    1206
 * Dislikes: 130
 * Total Accepted:    495.4K
 * Total Submissions: 894.3K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 *
 * Example 1:
 *
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 *
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s === t) return true;
  if (!s || !t) return false;

  let cs = count(s);
  let ct = count(t);

  for (let i = 0; i < cs.length; i++) {
    if (cs[i] !== ct[i]) return false;
  }

  return true;
};

function count(s) {
  let dic = new Array(26).fill(0);
  let a = 'a'.charCodeAt(0);

  for (let c of s) {
    dic[c.charCodeAt(0) - a]++;
  }

  return dic;
}
// @lc code=end
