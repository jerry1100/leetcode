// N: number of nodes
// Time: O(N)
// Space: O(N) due to stack frames

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

function levelOrder(root: TreeNode | null): number[][] {
    const nodesInLevel: number[][] = [];

    dfs(root, 0, nodesInLevel);

    return nodesInLevel;
}

function dfs(
    node: TreeNode | null,
    level: number,
    nodesInLevel: number[][]
): void {
    if (!node) {
        return;
    }

    // Start new level
    if (!nodesInLevel[level]) {
        nodesInLevel[level] = [];
    }

    // Save node in level
    nodesInLevel[level].push(node.val);

    // Process children
    dfs(node.left, level + 1, nodesInLevel);
    dfs(node.right, level + 1, nodesInLevel);
}
