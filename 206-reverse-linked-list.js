/*
  Solution:
    Go through each node and set the current node's next pointer to the previous node.

  Algorithm:
    prev = null
    curr = head

    while curr != null
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next

    return prev

  Analysis:
    Time: O(n)
    Space: O(1)
 */
    function reverseList(head) {
      let prev = null;
      let curr = head;

      while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      return prev;
    }
