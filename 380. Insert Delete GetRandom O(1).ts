// Time: O(1) insert, remove, getRandom
// Space: O(1) insert, remove, getRandom

class RandomizedSet {
    vals: number[];
    indexMap: Map<number, number>;

    constructor() {
        this.vals = [];
        this.indexMap = new Map();
    }

    insert(val: number): boolean {
        if (this.indexMap.has(val)) {
            return false;
        }

        this.vals.push(val);
        this.indexMap.set(val, this.vals.length - 1);

        return true;
    }

    remove(val: number): boolean {
        if (!this.indexMap.has(val)) {
            return false;
        }

        const indexToRemove = this.indexMap.get(val);
        const lastVal = this.vals[this.vals.length - 1];

        this.vals[indexToRemove] = lastVal;
        this.indexMap.set(lastVal, indexToRemove);

        this.vals.pop();
        this.indexMap.delete(val);

        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.vals.length);

        return this.vals[randomIndex];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
