// N: amount
// M: number of coins
// Time: O(N*M)
// Space: O(N)

function coinChange(coins: number[], amount: number): number {
    const NO_COUNT = Infinity;
    const dp = new Array<number>(amount + 1).fill(NO_COUNT);

    // No coins needed to make up 0
    dp[0] = 0;

    // Solve for 1...amount
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            // +1 for current coin, + count for remainder
            const count = 1 + dp[i - coin];

            // Take minimum count
            dp[i] = Math.min(dp[i], count);
        }
    }

    return dp[amount] === NO_COUNT ? -1 : dp[amount];
}
