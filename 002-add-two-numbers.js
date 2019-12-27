/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 *
 * time:  O(max{l1.length, l2.length})
 * space: O(max{l1.length, l2.length}) (+1)
 */
var addTwoNumbers = function(l1, l2) {
    let sum = 0;
    let carry = 0;
    let lastNode = new ListNode(0);
    let sumList = lastNode;

    while (l1 !== null || l2 !== null) {
        let digit1 = l1 === null ? 0 : l1.val;
        let digit2 = l2 === null ? 0 : l2.val;

        sum = digit1 + digit2 + carry;

        if (sum > 9) {
            carry = 1;
            sum = sum % 10;
        } else {
            carry = 0;
        }

        let currNode = new ListNode(sum);
        lastNode.next = currNode;
        lastNode = currNode;

        l1 = l1 === null ? l1 : l1.next;
        l2 = l2 === null ? l2 : l2.next;
    }

    if (carry === 1) {
        currNode = new ListNode(1);
        lastNode.next = currNode;
    }

    return sumList.next;
};


var addTwoNumbers2 = function(l1, l2) {
    let carry = 0;
    let lastNode = new ListNode(0);
    let sumList = lastNode;

    while (l1 !== null || l2 !== null) {
        let digit1 = l1 === null ? 0 : l1.val;
        let digit2 = l2 === null ? 0 : l2.val;
        let sum = digit1 + digit2 + carry;
        carry = sum > 9 ? 1 : 0;

        lastNode.next = new ListNode(sum % 10);
        lastNode = lastNode.next;

        l1 = l1 === null? l1 : l1.next;
        l2 = l2 === null? l2 : l2.next;
    }

    if (carry === 1) {
        lastNode.next = new ListNode(1);
    }

    return sumList.next;
};
