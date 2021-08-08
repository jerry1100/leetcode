// N: target
// M: number of nums
// Time: O(N*M)
// Space: O(N)

function combinationSum4(nums: number[], target: number): number {
    const dp = new Array<number>(target + 1).fill(0);

    // One combination that adds up to 0: empty set
    dp[0] = 1;

    // numCombos[i] = numCombos[i - num] for all num <= i
    // E.g. the number of ways we can make 10 with [2, 5] is the sum of the
    // number of ways we can make (10 - 2 = 8) and (10 - 5 = 5) with [2, 5]
    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (num <= i) {
                dp[i] += dp[i - num];
            }
        }
    }

    return dp[target];
}
