// N: number of nodes
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

function preorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [];

    dfs(root, res);

    return res;
}

function dfs(node: TreeNode | null, res: number[]): void {
    if (!node) {
        return;
    }

    // Process current
    res.push(node.val);

    // Process left
    dfs(node.left, res);

    // Process right
    dfs(node.right, res);
}
