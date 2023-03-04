/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (40.51%)
 * Likes:    12850
 * Dislikes: 3790
 * Total Accepted:    2.2M
 * Total Submissions: 5.4M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 * Example 1:
 *
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let prefix = ''
  let target = strs[0]

  for (let i = 0; i < target.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (target[i] !== strs[j][i]) return prefix
    }
    prefix += target[i]
  }

  return prefix
}
// @lc code=end
