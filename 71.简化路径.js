/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = [];
  const paths = path.split("/");
  for (let i = 0; i < paths.length; i++) {
    const element = paths[i];
    if (element === "..") stack.pop();
    else if (element && element !== ".") {
      stack.push(element);
    }
  }
  return "/" + stack.join("/");
};
// @lc code=end
