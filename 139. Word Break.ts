// N: string length
// M: words in dict
// Time: O(N^2 * M)
// Space: O(N)

// dp[i] = some word where substring at i starts with word and dp[i + word.length]
function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Array<boolean>(s.length + 1).fill(false);

    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        dp[i] = wordDict.some((word) => {
            // Can this word be a segment?
            if (!s.startsWith(word, i)) {
                return false;
            }

            // If we choose this word, can we segment the remaining string?
            return dp[i + word.length];
        });
    }

    return dp[0];
}
