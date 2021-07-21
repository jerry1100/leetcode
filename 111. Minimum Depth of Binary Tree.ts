// N: number of tree nodes
// Time: O(N)
// Space: O(N) for stack frames

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

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    // No left subtree, pick right
    if (!root.left) {
        return 1 + minDepth(root.right);
    }

    // No right subtree, pick left
    if (!root.right) {
        return 1 + minDepth(root.left);
    }

    // Both subtrees, pick smaller
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
