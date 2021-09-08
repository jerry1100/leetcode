// N: number of nodes
// M: number of edges
// Time: O(N + M)
// Space: O(N)

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

function cloneGraph(node: Node | null): Node | null {
    const clones = new Map<Node, Node>();

    return helper(node, clones);
}

function helper(node: Node | null, clones: Map<Node, Node>): Node | null {
    if (!node) {
        return null;
    }

    const newNode = new Node(node.val);

    clones.set(node, newNode);

    for (const neighbor of node.neighbors) {
        const newNeighbor = clones.get(neighbor) ?? helper(neighbor, clones);

        newNode.neighbors.push(newNeighbor);
    }

    return newNode;
}

/*
1 --- 2 --- 3
      |
      4*

1-----2-----3
      |
      4

map:
4,2,1,3

clone(node | null, map):
if !node
    return null

newNode = new Node(node.val);
map.set(node, newNode)

for (neighbor of node.neighbors)
    if (map.has(neighbor)) {
        newNode.neighbors.push(map.get(neighbor));
        continue
    }

    newNeighbor = clone(neighbor)
    newNode.neighbors.push(newNeighbor)

return newNode;
*/
