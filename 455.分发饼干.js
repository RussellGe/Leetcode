/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a-b)
  s.sort((a, b) => a-b)
  console.log(g, s)
  let res = 0
  let index = s.length -1
  for(let i = g.length-1; i >= 0; i --) {
      if(index>=0 && g[i] <= s[index]) {
          res++
          index--
      }
  }
  return res
};
// @lc code=end

