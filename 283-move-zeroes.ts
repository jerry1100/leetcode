// N: length of nums
// Time: O(N)
// Space: O(1)

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const iFirstZero = nums.indexOf(0);

    // No 0s to move
    if (iFirstZero === -1) {
        return;
    }

    // Swap with last 0 we saw
    let iLastZero = iFirstZero;
    for (let i = iFirstZero + 1; i < nums.length; i++) {
        if (nums[i] !== 0) {
            swap(nums, i, iLastZero);
            iLastZero++;
        }
    }
};

function swap(nums: number[], i1: number, i2: number): void {
    const tmp = nums[i1];
    nums[i1] = nums[i2];
    nums[i2] = tmp;
}