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
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;

  // Flip each node's next around
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}
