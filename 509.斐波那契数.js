/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dp1 = 0
  if(n<=1) return n
  let dp2 = 1
  for (let i = 2; i <= n; i++) {
    const tempo = dp1 + dp2
    dp1 = dp2
    dp2 = tempo
  }
  return dp2
};
// @lc code=end
