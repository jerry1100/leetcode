// N: number of nums
// Time: O(N*log(N))
// Space: O(log(N))

// Can also be solved using:
//  MinHeap: insert numbers in minHeap (log K) and poll() to only keep k numbers
//      Time: O(N*log(K))
//      Space: O(K)
//  QuickSelect: pick a pivot and move smaller nums to left of pivot, recurse, repeat
//      Time: O(N) average, O(N^2) worst case
//      Space: O(1)
function findKthLargest(nums: number[], k: number): number {
    const sorted = nums.sort((a, b) => b - a);

    return sorted[k - 1];
}
