// N: number of homes
// Time: O(N)
// Space: O(1)

function rob(nums: number[]): number {
    // No need to skip first/last if just one house
    if (nums.length === 1) {
        return nums[0];
    }

    return Math.max(
        robFrom(nums, 0, nums.length - 2), // keep first, skip last
        robFrom(nums, 1, nums.length - 1) // skip first, keep last
    );
}

// dp[i] = Max(nums[i] + dp[i + 2], dp[i + 1])
function robFrom(nums: number[], left: number, right: number): number {
    let lastRobVal = 0;
    let lastLastRobVal = 0;

    for (let i = right; i >= left; i--) {
        const currentVal = Math.max(nums[i] + lastLastRobVal, lastRobVal);

        lastLastRobVal = lastRobVal;
        lastRobVal = currentVal;
    }

    return lastRobVal;
}
