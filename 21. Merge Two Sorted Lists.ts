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

 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const preHead = new ListNode();
    let curr = preHead;
    let p1 = l1;
    let p2 = l2;

    while (p1 && p2) {
        if (p1.val < p2.val) {
            curr.next = p1;
            p1 = p1.next;
        } else {
            curr.next = p2;
            p2 = p2.next;
        }

        curr = curr.next;
    }
    
    // Connect potential trailing nodes
    curr.next = p1 || p2;
    
    return preHead.next;
}