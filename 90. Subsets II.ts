// N: length of nums
// Time: O(N*log(N) + N*2^N)
// Space: O(log(N))

function subsetsWithDup(nums: number[]): number[][] {
    // Sort to put duplicates next to each other
    const sortedNums = [...nums].sort((a, b) => a - b);
    const ans: number[][] = [[]];
    let start = 0;

    for (let i = 0; i < sortedNums.length; i++) {
        const length = ans.length;

        // If we haven't seen this number before, we can create all new
        // subsets using all existing subsets, so start from beginning.
        // If we have seen this number before, start where the last
        // iteration left off, so we're not repeating subsets.
        if (sortedNums[i] !== sortedNums[i - 1]) {
            start = 0;
        }

        // Create new subsets using existing ones
        for (start; start < length; start++) {
            ans.push(ans[start].concat(sortedNums[i]));
        }
    }

    return ans;
}
