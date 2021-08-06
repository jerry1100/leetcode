// N: length of nums
// Time: O(N^2)
// Space: O(N)

// Recurrence relation:
// memo[i] = max(memo[j] + 1) where j > i and nums[j] > nums[i]
function lengthOfLIS(nums: number[]): number {
    // memo[i]: longest sequence starting at i
    // All sequences are at least length 1
    const memo = new Array(nums.length).fill(1);

    // The longest sequence starting at i equals 1 (for current number) +
    // the longest sequence starting at an index to the right of i
    for (let i = nums.length - 1; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                memo[i] = Math.max(memo[i], 1 + memo[j]);
            }
        }
    }

    return Math.max(...memo);
}
