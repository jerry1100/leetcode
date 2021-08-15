// N: number of nums
// Time: O(N*2^N)
// Space: O(1) not including space reserved for answer

function subsets(nums: number[]): number[][] {
    const ans: number[][] = [[]]; // start with empty subset

    for (const num of nums) {
        const length = ans.length;

        // Create new subsets from existing subsets by adding num
        for (let i = 0; i < length; i++) {
            ans.push(ans[i].concat(num));
        }
    }

    return ans;
}
