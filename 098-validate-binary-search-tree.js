/**
 * Time: O(n)
 * Space: O(log n)
 * n - # of nodes
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  return checkVal(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

/**
 * @param {TreeNode} root
 * @param {number} min
 * @param {number} max
 * @return {boolean}
 */
function checkVal(node, min, max) {
  if (!node) {
    return true;
  }

  if (node.val < min || node.val > max) {
    return false;
  }

  // Current val is max for left child and min for right child
  return checkVal(node.left, min, node.val - 1) && checkVal(node.right, node.val + 1, max);
}
