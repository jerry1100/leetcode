// N: number of words in dict
// Time: O(N)
// Space: O(1)

function shortestDistance(
    wordsDict: string[],
    word1: string,
    word2: string
): number {
    let i1: number;
    let i2: number;
    let min = wordsDict.length;

    for (let i = 0; i < wordsDict.length && min > 1; i++) {
        const curr = wordsDict[i];

        if (curr === word1) {
            i1 = i;
        } else if (curr === word2) {
            i2 = i;
        }

        if (i1 !== undefined && i2 !== undefined) {
            min = Math.min(min, Math.abs(i1 - i2));
        }
    }

    return min;
}
