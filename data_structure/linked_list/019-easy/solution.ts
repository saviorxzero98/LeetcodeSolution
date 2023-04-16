/**
 * Definition for a binary tree node.
 */
 class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head == null) {
        return head;
    }
    if (n <= 0) {
        return null;
    }
    
    let fast = head;
    let slow = head;
    for (let i = 0; i < n; i++) {
        if (fast == null) {
            return null;
        }
        fast = fast.next;
    }

    if (fast == null) {
        return head.next;
    }

    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    if (slow.next != null) {
        slow.next = slow.next.next;
    }
    return head;
};