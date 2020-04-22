package dp

/*
 * @lc app=leetcode id=1143 lang=golang
 *
 * [1143] Longest Common Subsequence
 *
 * https://leetcode.com/problems/longest-common-subsequence/description/
 *
 * algorithms
 * Medium (57.67%)
 * Likes:    763
 * Dislikes: 11
 * Total Accepted:    48.6K
 * Total Submissions: 83.8K
 * Testcase Example:  '"abcde"\n"ace"'
 *
 * Given two strings text1 and text2, return the length of their longest common
 * subsequence.
 *
 * A subsequence of a string is a new string generated from the original string
 * with some characters(can be none) deleted without changing the relative
 * order of the remaining characters. (eg, "ace" is a subsequence of "abcde"
 * while "aec" is not). A common subsequence of two strings is a subsequence
 * that is common to both strings.
 *
 *
 *
 * If there is no common subsequence, return 0.
 *
 *
 * Example 1:
 *
 *
 * Input: text1 = "abcde", text2 = "ace"
 * Output: 3
 * Explanation: The longest common subsequence is "ace" and its length is 3.
 *
 *
 * Example 2:
 *
 *
 * Input: text1 = "abc", text2 = "abc"
 * Output: 3
 * Explanation: The longest common subsequence is "abc" and its length is 3.
 *
 *
 * Example 3:
 *
 *
 * Input: text1 = "abc", text2 = "def"
 * Output: 0
 * Explanation: There is no such common subsequence, so the result is 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= text1.length <= 1000
 * 1 <= text2.length <= 1000
 * The input strings consist of lowercase English characters only.
 *
 *
 */

// @lc code=start
func longestCommonSubsequence(text1 string, text2 string) int {
	l1, l2 := len(text1), len(text2)

	if l1 == 0 || l2 == 0 {
		return 0
	}

	f := make([][]int, l1+1)
	for i := range f {
		f[i] = make([]int, l2+1)
	}

	for i := 1; i <= l1; i++ {
		for j := 1; j <= l2; j++ {
			if text1[i-1:i] == text2[j-1:j] {
				f[i][j] = 1 + f[i-1][j-1]
			} else {
				max := f[i-1][j]

				if f[i-1][j] < f[i][j-1] {
					max = f[i][j-1]
				}

				f[i][j] = max
			}
		}
	}

	return f[l1][l2]
}

// @lc code=end

//   a c e
// a[1 1 1]
// b[1 1 1]
// c[1 2 1]
// d[1 1 1]
// e[1 1 2]

//   b l
// y 0 0
// b 1 1
// y 1 1
