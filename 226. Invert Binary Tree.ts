// N: number of nodes in tree
// Time: O(N)
// Space: O(N) for recursion stack

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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }

    // Swap left & right
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    // Swap children
    invertTree(root.left);
    invertTree(root.right);

    return root;
}
