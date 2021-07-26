// N: number of nums
// Time: O(N)
// Space: O(N)

function subarraySum(nums: number[], k: number): number {
    const sums = new Map<number, number>();

    // When sum === k, the complement is 0. That is a valid solution but we may not
    // have seen previous nums that summed to 0, so we initialize the count to 1.
    sums.set(0, 1);

    let ans = 0;
    let sum = 0;

    for (const num of nums) {
        sum += num;

        // We are trying to find sum - complement === k. Recall that complement is a
        // previous sum, and so sum - complement is the sum between two indices of nums.
        const complement = sum - k;
        if (sums.has(complement)) {
            ans += sums.get(complement);
        }

        // Save sum as it can be the complement for a future sum
        const numSum = sums.get(sum) ?? 0;
        sums.set(sum, numSum + 1);
    }

    return ans;
}
