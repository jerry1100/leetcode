/**
 * Time: O(max(n, m))
 * Space: O(max(n, m))
 * n - # of nodes in l1
 * m - # of nodes in l2
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let dummy = new ListNode();
  let node = dummy;
  let carry = 0;

  // While there is more to add
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;

    // Add digit
    node.next = new ListNode(sum % 10);
    node = node.next;

    // Update nodes
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return dummy.next;
}
