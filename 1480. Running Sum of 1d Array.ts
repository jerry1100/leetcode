// N: length of nums
// Time: (N)
// Space: O(1) (space used for answer is ignored)

function runningSum(nums: number[]): number[] {
    const sums = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i];
    }

    return sums;
}
