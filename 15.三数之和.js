/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // n*logN
  const resList = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[left] + nums[right] + nums[i] === 0) {
        resList.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (nums[left] + nums[right] + nums[i] > 0) right--;
      else left++;
    }
  }
  return resList;
};
// @lc code=end
