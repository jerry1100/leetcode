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
function deleteDuplicates(head) {
  let node = head;

  while (node && node.next) {
    if (node.val === node.next.val) {
      node.next = node.next.next; // remove next node
    } else {
      node = node.next;
    }
  }

  return head;
}
