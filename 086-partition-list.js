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
 * @param {number} x
 * @return {ListNode}
 */
function partition(head, x) {
  let leftHead = new ListNode(); // dummy node
  let rightHead = new ListNode(); // dummy node
  let left = leftHead;
  let right = rightHead;

  // Split list into two sides, left if val < x, else right
  for (let node = head; node !== null; node = node.next) {
    if (node.val < x) {
      left.next = node;
      left = node;
    } else {
      right.next = node;
      right = node;
    }
  }

  // Combine the two sides
  left.next = rightHead.next;
  right.next = null;

  return leftHead.next;
}
