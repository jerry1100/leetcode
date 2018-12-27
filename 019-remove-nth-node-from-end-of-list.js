/**
 * Time: O(n)
 * Space: O(1)
 * n - # of nodes
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  let dummy = { next: head }; // dummy node to handle removing head
  let fast = dummy;
  let slow = dummy;

  // Move fast n + 1 nodes ahead of slow
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }

  // Move fast to end, slow will be (n + 1)th from last node, just before the node to remove
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the nth from last node
  slow.next = slow.next.next;
  return dummy.next;
}
