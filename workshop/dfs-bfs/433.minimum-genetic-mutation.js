/*
 * @lc app=leetcode id=433 lang=javascript
 *
 * [433] Minimum Genetic Mutation
 *
 * https://leetcode.com/problems/minimum-genetic-mutation/description/
 *
 * algorithms
 * Medium (40.41%)
 * Likes:    352
 * Dislikes: 42
 * Total Accepted:    28.2K
 * Total Submissions: 69.4K
 * Testcase Example:  '"AACCGGTT"\n"AACCGGTA"\n["AACCGGTA"]'
 *
 * A gene string can be represented by an 8-character long string, with choices
 * from "A", "C", "G", "T".
 *
 * Suppose we need to investigate about a mutation (mutation from "start" to
 * "end"), where ONE mutation is defined as ONE single character changed in the
 * gene string.
 *
 * For example, "AACCGGTT" -> "AACCGGTA" is 1 mutation.
 *
 * Also, there is a given gene "bank", which records all the valid gene
 * mutations. A gene must be in the bank to make it a valid gene string.
 *
 * Now, given 3 things - start, end, bank, your task is to determine what is
 * the minimum number of mutations needed to mutate from "start" to "end". If
 * there is no such a mutation, return -1.
 *
 * Note:
 *
 *
 * Starting point is assumed to be valid, so it might not be included in the
 * bank.
 * If multiple mutations are needed, all mutations during in the sequence must
 * be valid.
 * You may assume start and end string is not the same.
 *
 *
 *
 *
 * Example 1:
 *
 *
 * start: "AACCGGTT"
 * end:   "AACCGGTA"
 * bank: ["AACCGGTA"]
 *
 * return: 1
 *
 *
 *
 *
 * Example 2:
 *
 *
 * start: "AACCGGTT"
 * end:   "AAACGGTA"
 * bank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]
 *
 * return: 2
 *
 *
 *
 *
 * Example 3:
 *
 *
 * start: "AAAAACCC"
 * end:   "AACCCCCC"
 * bank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]
 *
 * return: 3
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (start, end, bank) {
  if (start === end) return 0

  let bankSet = new Set(bank)
  let q = [[start, 0]]
  let genes = ['A', 'C', 'G', 'T']

  while (q.length !== 0) {
    let len = q.length
    while (len-- > 0) {
      let [gene, count] = q.shift()
      if (gene === end) return count

      for (let i = 0; i < gene.length; i++) {
        for (let g of genes) {
          let newGene = gene.slice(0, i) + g + gene.slice(i + 1)

          if (bankSet.has(newGene)) {
            q.push([newGene, count + 1])
            bankSet.delete(newGene)
          }
        }
      }
    }
  }

  return -1
}
// @lc code=end

var minMutation = function (start, end, bank) {
  if (start === end) return 0

  let s = [start]
  let visited = new Set([start])
  let level = 0
  let genes = ['A', 'C', 'G', 'T']

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

  return -1
}
