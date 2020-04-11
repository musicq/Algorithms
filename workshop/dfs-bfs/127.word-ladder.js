/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 *
 * https://leetcode.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (27.80%)
 * Likes:    2619
 * Dislikes: 1040
 * Total Accepted:    380K
 * Total Submissions: 1.4M
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * Given two words (beginWord and endWord), and a dictionary's word list, find
 * the length of shortest transformation sequence from beginWord to endWord,
 * such that:
 *
 *
 * Only one letter can be changed at a time.
 * Each transformed word must exist in the word list. Note that beginWord is
 * not a transformed word.
 *
 *
 * Note:
 *
 *
 * Return 0 if there is no such transformation sequence.
 * All words have the same length.
 * All words contain only lowercase alphabetic characters.
 * You may assume no duplicates in the word list.
 * You may assume beginWord and endWord are non-empty and are not the same.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output: 5
 *
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" ->
 * "dog" -> "cog",
 * return its length 5.
 *
 *
 * Example 2:
 *
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: 0
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible
 * transformation.
 *
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (start, end, bank) {
  if (start === end) return 0

  let s = [start]
  let visited = new Set([start])
  let level = 0
  let genes = 'abcdefghijklmnopqrstuvwxyz'

  while (s.length !== 0) {
    let len = s.length

    while (len-- > 0) {
      let curr = s.shift()
      if (curr === end) return level

      let currArr = curr.split('')

      for (let i = 0; i < currArr.length; i++) {
        let old = currArr[i]

        for (let g of genes) {
          currArr[i] = g
          let newGenetic = currArr.join('')

          if (!visited.has(newGenetic) && bank.includes(newGenetic)) {
            s.push(newGenetic)
            visited.add(newGenetic)
          }
        }
        currArr[i] = old
      }
    }
    level++
  }

  return 0
}
// @lc code=end
