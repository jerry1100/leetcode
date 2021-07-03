// N: length of nums
// Time: O(N)
// Space: O(1)

function pivotIndex(nums: number[]): number {
    const totalSum = nums.reduce((sum, num) => sum + num);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - nums[i] - leftSum;

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
}
