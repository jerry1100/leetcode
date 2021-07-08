// N: number of nodes in the tree
// Time: O(N)
// Space: O(N) if tree is linear

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

function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root, root);
}

function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 || !node2) {
        return !node1 && !node2;
    }

    return (
        node1.val === node2.val &&
        isMirror(node1.left, node2.right) &&
        isMirror(node1.right, node2.left)
    );
}
