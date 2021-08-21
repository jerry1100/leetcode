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
