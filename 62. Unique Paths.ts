// M: number of rows
// N: number of cols
// Time: O(N*M)
// Space: O(N*M)

// dp[i][j] = # unique paths for i x j grid
// dp[i][j] = dp[i-1][j] + dp[i][j-1]
function uniquePaths(m: number, n: number): number {
    const dp: number[][] = new Array(m)
        .fill(0)
        .map((_) => new Array(n).fill(1));

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
}
