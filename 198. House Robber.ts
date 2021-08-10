// N: number of houses
// Time: O(N)
// Space: O(1)

// Decision: rob the current house or not?
// dp[i] = Max(nums[i] + dp[i+2], dp[i+1])
function rob(nums: number[]): number {
    let lastRobVal = 0;
    let lastLastRobVal = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        const currRobVal = Math.max(nums[i] + lastLastRobVal, lastRobVal);

        lastLastRobVal = lastRobVal;
        lastRobVal = currRobVal;
    }

    return lastRobVal;
}
