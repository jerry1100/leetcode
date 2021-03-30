/*
  Naive solution:
    Compare the current nodes' values, then recursively call isSameTree() on their
    left and right children.

  Time complexity:
    Worst case we'll visit each node, O(n)

  Space complexity:
    This does a DFS comparison on both trees, with each call descending one level
    deeper. A binary tree with n nodes will have a height of log(n), so worst case
    we will use O(log(n)) space to store the stack frames.

    Note: a space complexity of O(log(n)) only applies if the binary tree is
    balanced, which it wasn't stated to be. In the worst case scenario of an
    unbalanced binary tree and we descended all the way to the bottom, this will
    be O(n).

  Note: I had a bit of difficulty handling the null cases. When trying to fix
  them, I accidentally removed the base case, causing the submission to exceed
  the maximum call stack. Never forget the base case in a recursive method!
 */
function isSameTree(p, q) {
  if (p === null && q === null) {
    return true;
  }

  if ((p !== null && q === null) || (p === null && q !== null)) {
    return false;
  }

  return p.val === q.val
    && isSameTree(p.left, q.left)
    && isSameTree(p.right, q.right);
}
