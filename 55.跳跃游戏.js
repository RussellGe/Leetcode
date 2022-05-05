/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;
  if (!nums.includes(0)) return true;
  let cover = nums[0];
  for (let i = 0; i <= cover; i++) {
    if (cover >= nums.length - 1) {
      return true;
    }
    cover = Math.max(cover, nums[i] + i);
  }
  console.log(cover)
  return false;
};
// @lc code=end
