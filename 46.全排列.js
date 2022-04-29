/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backtrack(list, temp, nums) {
  // 终止条件
  if (temp.length === nums.length) {
    return list.push([...temp]);
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) {
      continue
    }
    // 放进入一个元素 执行递归公式 撤回这个元素
    temp.push(nums[i]);
    backtrack(list, temp, nums);
    temp.pop();
  }
}

var permute = function (nums) {
  const list = [];
  // 递归公式
  backtrack(list, [], nums);
  return list;
};
// @lc code=end
