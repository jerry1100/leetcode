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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummyHead = new ListNode(0, head);
    let slow = dummyHead;
    let fast = dummyHead;

    // Move fast n nodes ahead of slow
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // When fast reaches 1st node from the end, slow will be n+1th node from the end
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // Skip over the nth node from the end
    slow.next = slow.next.next;

    return dummyHead.next;
}
