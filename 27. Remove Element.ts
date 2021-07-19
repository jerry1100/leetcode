// N: length of nums
// Time: O(N)
// Space: O(1)

function removeElement(nums: number[], val: number): number {
    let i = 0;
    let length = nums.length;

    while (i < length) {
        if (nums[i] !== val) {
            i++;
            continue;
        }

        // Remove elements by swapping with last element. This is ok as the
        // relative ordering doesn't matter.
        nums[i] = nums[length - 1];
        length--;
    }

    return length;
}
