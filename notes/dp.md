DP 状态数组可以开 n 或 n+1，需要注意的是，如果申请 n+1 时，循环需要
`i = 1 or 0; i <= n; i++`，如果是 n 则不需要等于 `i = 0 or 1; i < n; i++`