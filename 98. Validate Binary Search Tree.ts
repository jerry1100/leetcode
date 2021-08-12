// N: number of nodes
// Time: O(N)
// Space: O(N) from stack frames

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    return isValidSubtree(root, -Infinity, Infinity);
}

function isValidSubtree(
    node: TreeNode | null,
    min: number,
    max: number
): boolean {
    if (!node) {
        return true;
    }

    if (node.val < min || node.val > max) {
        return false;
    }

    // Left subtree < node.val < right subtree
    return (
        isValidSubtree(node.left, min, node.val - 1) &&
        isValidSubtree(node.right, node.val + 1, max)
    );
}
