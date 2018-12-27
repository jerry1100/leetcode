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
function detectCycle(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      // The distance between the head and cycle beginning is the same as the distance between
      // the collision point and cycle beginning. Therefore, pointers starting at the head and
      // collision point will reach the cycle beginning at the same time.
      while (slow !== head) {
        slow = slow.next;
        head = head.next;
      }
      return slow;
    }
  }

  return null;
}
