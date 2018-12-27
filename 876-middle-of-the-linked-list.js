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
function middleNode(head) {
  let fast = head;
  let slow = head;

  // When fast reaches the end, slow will be at the midpoint
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}
