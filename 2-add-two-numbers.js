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
  let carry = 0;
  let firstNode;
  let currentNode;

  // While there are nodes to process
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;

    // Add a node for the solution
    if (!currentNode) {
      firstNode = new ListNode(sum % 10);
      currentNode = firstNode;
    } else {
      currentNode.next = new ListNode(sum % 10);
      currentNode = currentNode.next;
    }

    // Move on to next nodes
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  return firstNode;
};
