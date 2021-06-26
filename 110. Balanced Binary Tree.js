/**
 * Time: O(n)
 * Space: O(log n)
 * n - # of tree nodes
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const IS_UNBALANCED = Number.NEGATIVE_INFINITY; // error code when tree is unbalanced

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  return getSubtreeHeight(root) !== IS_UNBALANCED;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function getSubtreeHeight(node) {
  if (!node) {
    return -1;
  }

  const leftHeight = getSubtreeHeight(node.left);
  if (leftHeight === IS_UNBALANCED) {
    return IS_UNBALANCED;
  }

  const rightHeight = getSubtreeHeight(node.right);
  if (rightHeight === IS_UNBALANCED) {
    return IS_UNBALANCED;
  }

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return IS_UNBALANCED;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}
