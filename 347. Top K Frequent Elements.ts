// N: number of nums
// k: number of frequent nums
// Time: O(N*log(k)) assuming proper heap implementation
// Space: O(N)

function topKFrequent(nums: number[], k: number): number[] {
    const counts = new Map<number, number>();

    for (const num of nums) {
        if (!counts.has(num)) {
            counts.set(num, 0);
        }

        counts.set(num, counts.get(num) + 1);
    }

    const minHeap = new DummyHeap<number>(
        (num1, num2) => counts.get(num1) - counts.get(num2)
    );

    for (const [num] of counts) {
        minHeap.push(num);

        if (minHeap.size() > k) {
            minHeap.pop();
        }
    }

    return minHeap.values();
}

class DummyHeap<T> {
    items: T[];
    comparatorFn: (item1: T, item2: T) => number;

    constructor(comparatorFn: (item1: T, item2: T) => number) {
        this.items = [];
        this.comparatorFn = comparatorFn;
    }

    // Real implementation is O(log(N))
    push(item: T): void {
        this.items.push(item);
        this._heapify();
    }

    // Real implementation is O(log(N))
    pop(): T | undefined {
        return this.items.shift();
    }

    // O(1)
    top(): T | undefined {
        return this.items[0];
    }

    // O(1)
    size(): number {
        return this.items.length;
    }

    // Real implementation is O(N)
    values(): T[] {
        return this.items;
    }

    _heapify(): void {
        this.items.sort(this.comparatorFn);
    }
}
