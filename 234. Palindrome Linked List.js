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
 * @return {boolean}
 */
function isPalindrome(head) {
  let fast = head;
  let slow = head;

  // Set slow to the head of the second half
  while (fast) {
    fast = fast.next ? fast.next.next : fast.next;
    slow = slow.next;
  }

  // Reverse the second half
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare the two halves in sequence
  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }

  return true;
}
