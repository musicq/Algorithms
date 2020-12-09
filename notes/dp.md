https://en.wikipedia.org/wiki/Dynamic_programming

DP 状态数组可以开 n 或 n+1，需要注意的是，如果申请 n+1 时，循环需要
`i = 1 or 0; i <= n; i++`，如果是 n 则不需要等于 `i = 0 or 1; i < n; i++`

# 解题模板

1. 声明一个状态数组，长度为 n 或 n+1
2. 初始化数组状态，例如 f[0] = 0
3. 状态转移方程，例如 f[n] = min(f[n-1] + f[n-2] + f[n-5]) + 1
4. 返回结果 f[n] 或 f[n-1]

## Example

```text
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
Example 4:

Input: coins = [1], amount = 1
Output: 1
Example 5:

Input: coins = [1], amount = 2
Output: 2

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
```

```js
function coinChange(coins, amount) {
  // 这里声明数组长度是 amount + 1，是因为最后结果需要的是 f[amount]，而不是 f[amount-1]。
  // 这和状态转移方程有关。
  // 我要声明的状态转移方程是: f[n] = min(f[n-1] + f[n-2] + f[n-5]) + 1
  // 它代表
  // 最少的硬币数[金额] = 这几种情况里消耗硬币最少的一种情况（最少的硬币数（减去 1 块），最少的硬币数（减去 2 块），最少的硬币数（减去 5 块））+ 仍然需要的这一枚硬币（5 or 2 or 1）
  let f = new Array(amount + 1)

  // 初始情况
  f[0] = 0 // 因为条件给出的硬币最小值大于等于 1

  // i <= amount，代表我们需要计算到 amount 的金额，而非 amount-1
  for (let i = 1; i <= amount; i++) {
    // 假设当前金额不能被给定的硬币拼出来，则给一个最大值
    // 之所以给 Infinity 是为了后面跟可以拼出来的情况取最小值，如果反之求最大情况，则应该给 -Infinity
    f[i] = Infinity

    for (const coin of coins) {
      // i >= coin 是为了让金额不会为负数，因为 1）负数没意义 2）负数没有初始情况，所以算不出来
      // f[i - coin] !== Infinity 是直接短路，因为此种情况肯定拼不出来给定金额，所以没必要继续算
      if (i >= coin && f[i - coin] !== Infinity) {
        f[i] = Math.min(f[i - coin] + 1, f[i])
      }
    }
  }

  if (f[amount] === Infinity) return -1

  return f[amount]
}
```

# Problems

[MIT 动态规划课程最短路径算法](https://www.bilibili.com/video/av53233912?from=search&seid=2847395688604491997)

- https://leetcode-cn.com/problems/climbing-stairs/description/
- https://leetcode-cn.com/problems/triangle/description/
- https://leetcode.com/problems/triangle/discuss/38735/Python-easy-to-understand-solutions-(top-down-bottom-up)
- https://leetcode-cn.com/problems/maximum-subarray/
- https://leetcode-cn.com/problems/maximum-product-subarray/description/
- https://leetcode-cn.com/problems/coin-change/description/

实战题目

- https://leetcode-cn.com/problems/house-robber/
- https://leetcode-cn.com/problems/house-robber-ii/description/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/#/description
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
- https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3/

高级 DP 实战题目

- https://leetcode-cn.com/problems/perfect-squares/
- https://leetcode-cn.com/problems/edit-distance/ （重点）
- https://leetcode-cn.com/problems/jump-game/
- https://leetcode-cn.com/problems/jump-game-ii/
- https://leetcode-cn.com/problems/unique-paths/
- https://leetcode-cn.com/problems/unique-paths-ii/
- https://leetcode-cn.com/problems/unique-paths-iii/
- https://leetcode-cn.com/problems/coin-change/
- https://leetcode-cn.com/problems/coin-change-2/

中等

- https://leetcode-cn.com/problems/minimum-path-sum/
- https://leetcode-cn.com/problems/decode-ways
- https://leetcode-cn.com/problems/maximal-square/
- https://leetcode-cn.com/problems/task-scheduler/
- https://leetcode-cn.com/problems/palindromic-substrings/

困难

- https://leetcode-cn.com/problems/longest-valid-parentheses/
- https://leetcode-cn.com/problems/edit-distance/
- https://leetcode-cn.com/problems/max-sum-of-rectangle-no-larger-than-k/
- https://leetcode-cn.com/problems/frog-jump/
- https://leetcode-cn.com/problems/split-array-largest-sum
- https://leetcode-cn.com/problems/student-attendance-record-ii/
- https://leetcode-cn.com/problems/minimum-window-substring/
- https://leetcode-cn.com/problems/burst-balloons/
