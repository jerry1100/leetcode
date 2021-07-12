// N: number of nums
// Time: O(N)
// Space: O(1) not including space reserved for answer

function shuffle(nums: number[], n: number): number[] {
    const shuffled: number[] = [];

    for (let i = 0; i < n; i++) {
        shuffled.push(nums[i], nums[i + n]);
    }

    return shuffled;
}
