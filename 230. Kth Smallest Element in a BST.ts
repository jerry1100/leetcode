// N: number of nodes
// Time: O(N)
// Space: O(N)

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

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: TreeNode[] = [];
    let node = root;
    let count = 0;

    while (node || stack.length) {
        // Process left
        while (node) {
            stack.push(node);
            node = node.left;
        }

        // Process current. If this is the kth node we've processed,
        // then this is the answer.
        node = stack.pop();
        count++;
        if (count === k) {
            return node.val;
        }

        // Process right
        node = node.right;
    }

    return -1;
}
