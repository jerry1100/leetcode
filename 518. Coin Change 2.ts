// N: amount
// M: number of coins
// Time: O(N*M)
// Space: O(N)

// dp[i] = dp[i] + dp[i - coin]
function change(amount: number, coins: number[]): number {
    const dp = new Array<number>(amount + 1).fill(0);

    // 1 way to make 0: empty set
    dp[0] = 1;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }

    return dp[amount];
}
