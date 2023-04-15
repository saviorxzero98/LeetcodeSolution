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



function reverseList(head: ListNode | null): ListNode | null {
    if (head == undefined) {
        return null;
    }
    let result = reverse(head);
    return result.head;
};

function reverse(node: ListNode | null): { prenode: ListNode | null, head: ListNode | null } {
    if (node.next === null) {
        return { prenode: node, head: node }
    }
    let { prenode, head } = reverse(node.next);
    prenode.next = node;
    node.next = null;
    return { prenode: node, head: head };
}


