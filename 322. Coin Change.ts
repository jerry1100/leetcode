// N: amount
// M: number of coins
// Time: O(N*M)
// Space: O(N)

function coinChange(coins: number[], amount: number): number {
    const NO_COUNT = Infinity;
    const memo = new Array(amount + 1).fill(NO_COUNT);

    // No coins needed to make up 0
    memo[0] = 0;

    // Solve for 1...amount
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            // +1 for current coin, + count for remainder
            const count = 1 + memo[i - coin];

            // Take minimum count
            memo[i] = Math.min(memo[i], count);
        }
    }

    return memo[amount] === NO_COUNT ? -1 : memo[amount];
}
