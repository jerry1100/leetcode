// N: number of nodes in root tree
// S: number of nodes in subtree
// Time: O(N + S)
// Space: O(N + S)

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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const subRootHeight = getHeight(subRoot);
    const nodesWithSubRootHeight: TreeNode[] = [];

    getHeight(root, (node, height) => {
        if (height === subRootHeight) {
            nodesWithSubRootHeight.push(node);
        }
    });

    return nodesWithSubRootHeight.some((node) => areTreesEqual(node, subRoot));
}

// Define height as the number of nodes from root to leaf
function getHeight(
    node: TreeNode | null,
    callback?: (node: TreeNode, height: number) => void
): number {
    if (!node) {
        return 0;
    }

    const height =
        1 +
        Math.max(
            getHeight(node.left, callback),
            getHeight(node.right, callback)
        );

    if (callback) {
        callback(node, height);
    }

    return height;
}

function areTreesEqual(
    node1: TreeNode | null,
    node2: TreeNode | null
): boolean {
    if (!node1 || !node2) {
        return !node1 && !node2;
    }

    return (
        node1.val === node2.val &&
        areTreesEqual(node1.left, node2.left) &&
        areTreesEqual(node1.right, node2.right)
    );
}
