/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = fast = head
    let prev
    while(fast && fast.next) {
        fast = fast.next.next
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    if(fast) {
        slow = slow.next
    }
    while(slow && prev) {
        if(prev.val !== slow.val) {
            return false
        }
        prev = prev.next
        slow = slow.next
    }
    return true
};
// @lc code=end

