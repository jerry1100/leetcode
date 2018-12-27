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
  const digits1 = [];
  const digits2 = [];

  // Fill in digits from each list
  for (let n = l1; n !== null; n = n.next) {
    digits1.push(n.val);
  }
  for (let n = l2; n !== null; n = n.next) {
    digits2.push(n.val);
  }

  // Sum the digits in reverse order (least significant first)
  let prev = null;
  let carry = 0;
  while (digits1.length || digits2.length || carry) {
    const val1 = digits1.pop() || 0;
    const val2 = digits2.pop() || 0;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;

    // Build the list backwards so digits are in forward order
    const newNode = new ListNode(sum % 10);
    newNode.next = prev;
    prev = newNode;
  }

  return prev;
}
