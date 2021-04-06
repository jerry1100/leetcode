/*
  Solution:
    Store nodes in a set and check if we've seen the node before

  Analysis:
    Time: O(n)
    Space: O(n)
 */
function hasCycle(head) {
  const seen = new Set();

  while (head) {
    if (seen.has(head)) {
      return true;
    }

    seen.add(head);

    head = head.next;
  }

  return false;
}

/*
  Solution 2:
    Another solution that doesn't use any extra memory is the fast & slow pointers approach. Have
    one pointer, fast, that moves two nodes each time, whereas the slow pointer moves one node each
    time. If fast and slow ever meet, then there is a cycle.

  Algorithm:
    fast = head
    slow = head

    while (fast.next)
      fast = fast.next.next
      slow = slow.next

      if (fast === slow) {
        return true;
      }

    return false;

  Analysis:
    Time: O(n)
    Space: O(1)
 */
function hasCycle(head) {
  let fast = head;
  let slow = head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}
