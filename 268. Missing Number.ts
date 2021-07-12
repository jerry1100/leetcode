// N: number of nums
// Time: O(N)
// Space: O(1)

function missingNumber(nums: number[]): number {
    const rangeSum = (nums.length * (nums.length + 1)) / 2; // n(n+1)/2
    const arrSum = nums.reduce((sum, num) => sum + num);

    return rangeSum - arrSum;
}
