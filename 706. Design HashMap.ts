// N: number of items added
// M: size of map
// Time: O(N/M) for put, get, remoe
// Space: O(M + N)

interface INode {
    key: number;
    value: number;
}

interface INodeList extends Array<INode>{};

const MAP_SIZE = 10**3;

class MyHashMap {
    map: INodeList[];

    constructor() {
        this.map = new Array(MAP_SIZE);
    }

    getHash(key: number): number {
        return key % MAP_SIZE;
    }

    put(key: number, value: number): void {
        const hash = this.getHash(key);

        if (!this.map[hash]) {
            this.map[hash] = [];
        }

        const nodeList = this.map[hash];
        const node = nodeList.find(node => node.key === key);

        if (node) {
            node.value = value;
        } else {
            nodeList.push({ key, value });
        }
    }

    get(key: number): number {
        const hash = this.getHash(key);
        const nodeList = this.map[hash] || [];
        const node = nodeList.find(node => node.key === key);
        
        return node?.value ?? -1;
    }

    remove(key: number): void {
        const hash = this.getHash(key);

        if (!this.map[hash]) {
            return;
        }

        this.map[hash] = this.map[hash].filter(node => node.key !== key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

