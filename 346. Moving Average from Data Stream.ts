// N: window size
// Time: O(1) assuming shift() is constant time
// Space: O(N)

class MovingAverage {
    maxSize: number;
    sum: number;
    nums: number[];

    constructor(size: number) {
        this.maxSize = size;
        this.sum = 0;
        this.nums = [];
    }

    next(val: number): number {
        if (this.nums.length >= this.maxSize) {
            const removed = this.nums.shift();
            this.sum -= removed;
        }

        this.sum += val;
        this.nums.push(val);

        return this.sum / this.nums.length;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
