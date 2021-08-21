// N: length of list1
// M: length of list2
// Time: O(N+M)
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

function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const dummyHead = new ListNode();
    let curr = dummyHead;
    let node1 = l1;
    let node2 = l2;

    while (node1 && node2) {
        if (node1.val < node2.val) {
            curr.next = node1;
            node1 = node1.next;
        } else {
            curr.next = node2;
            node2 = node2.next;
        }

        curr = curr.next;
    }

    // Connect remaining nodes, if any
    curr.next = node1 ?? node2;

    return dummyHead.next;
}
