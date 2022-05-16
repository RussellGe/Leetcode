/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let res = new ListNode(null, null)
    const dummy = res
    while (list1 || list2) {
        if (!list1) {
            res.next = list2
            list2 = list2.next
        } else if (!list2) {
            res.next = list1
            list1 = list1.next
        } else {
            if (list1.val < list2.val) {
                res.next = list1
                list1 = list1.next
            } else {
                res.next = list2
                list2 = list2.next
            }
        }
        res = res.next
    }
    return dummy.next
};
// @lc code=end

