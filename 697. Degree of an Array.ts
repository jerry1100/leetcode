// N: length of nums
// Time: O(N)
// Space: O(N)

function findShortestSubArray(nums: number[]): number {
    const left = new Map<number, number>(); // first instance of num
    const right = new Map<number, number>(); // last instance of num
    const count = new Map<number, number>(); // count of num

    // Fill in left, right, count
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (!left.has(num)) {
            left.set(num, i);
        }

        right.set(num, i);
        count.set(num, (count.get(num) ?? 0) + 1);
    }

    const degree = Math.max(...count.values());

    // Determine min subarray length
    let minLength = Infinity;
    for (const [num, numCount] of count) {
        if (numCount === degree) {
            const length = right.get(num) - left.get(num) + 1;

            minLength = Math.min(minLength, length);
        }
    }

    return minLength;
}
