/**
 * Time: O(max(n, m))
 * Space: O(1)
 * n - # of nodes in list A
 * m - # of nodes in list B
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let nodeA = headA;
  let nodeB = headB;

  // Traverse the list up to two times, swapping pointers after the first pass, which will account
  // for any difference in length. If there is no intersection, then both pointers will be null
  // after the second pass, and null is returned, as expected.
  while (nodeA !== nodeB) {
    nodeA = nodeA ? nodeA.next : headB;
    nodeB = nodeB ? nodeB.next : headA;
  }

  return nodeA;
}
