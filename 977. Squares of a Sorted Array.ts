// N: number of nums
// Time: O(N)
// Space: O(1) not counting space reserved for answer

// Two-pointer approach, relies on bigger numbers being at outer edges and smaller
// numbers being in the middle. Use two pointers to work towards middle, inserting
// the bigger number, but in reverse order.
function sortedSquares(nums: number[]): number[] {
    const squares = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;

    // Build array backwards, inserting the bigger number, so in forward direction
    // it will be in ascending order
    for (let i = nums.length - 1; i >= 0; i--) {
        const leftNum = Math.abs(nums[left]);
        const rightNum = Math.abs(nums[right]);

        if (leftNum > rightNum) {
            squares[i] = leftNum ** 2;
            left++;
        } else {
            squares[i] = rightNum ** 2;
            right--;
        }
    }

    return squares;
}
