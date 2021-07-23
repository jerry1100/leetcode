// N: cache capacity
// Time: O(1) for get and put
// Space: O(N)

class LRUCache {
    map: Map<number, number>;
    capacity: number;

    constructor(capacity: number) {
        this.map = new Map();
        this.capacity = capacity;
    }

    get(key: number): number {
        if (!this.map.has(key)) {
            return -1;
        }

        const val = this.map.get(key);

        // Move to front
        this.map.delete(key);
        this.map.set(key, val);

        return val;
    }

    put(key: number, value: number): void {
        this.map.delete(key);

        if (this.map.size === this.capacity) {
            this.map.delete(this.map.keys().next().value); // remove first inserted key
        }

        this.map.set(key, value);
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
