// N: number of nodes
// Time: O(N)
// Space: O(1)

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    const head2 = getSecondHead(head);
    const reversedHead2 = reverseList(head2);

    let node1 = head;
    let node2 = reversedHead2;
    let next1: ListNode | null;
    let next2: ListNode | null;

    while (node2?.next) {
        next1 = node1.next;
        next2 = node2.next;

        node1.next = node2;
        node2.next = next1;

        node1 = next1;
        node2 = next2;
    }
}

function getSecondHead(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast?.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function reverseList(head: ListNode | null): ListNode | null {
    let node = head;
    let prev: ListNode | null = null;

    while (node) {
        const next = node.next;
        node.next = prev;

        prev = node;
        node = next;
    }

    return prev;
}
