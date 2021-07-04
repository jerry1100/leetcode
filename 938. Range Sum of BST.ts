// N: number of nodes in tree
// Time: O(N)
// Space: O(N) for stack frames due to recursion

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    if (!root) {
        return 0;
    }

    let sum = 0;

    if (low <= root.val && root.val <= high) {
        sum += root.val;
    }

    // Left subtree can still be in range
    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }

    // Right subtree can still be in range
    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum;
}
