// Note to self: I struggled with getting the logic in the while loop correct. I was trying to do too much in one
// iteration of the loop, which made it difficult to remember what I did so far and what I still needed to do.

// What ultimately helped was making just ONE decision per iteration, then continuing and starting from the top with a
// clean slate. This reminds me of React where we make one state update, then re-render, then we can reason about
// what to do with our new state, without worrying about intermediate values.

function removeDuplicates(nums: number[]): number {
    if (nums.length < 2) {
        return nums.length;
    }
    
    let iValid = 1; // everything left of this is valid
    let iTest = 1;

    while (iTest < nums.length) {
        // No duplicate so can move valid divider to right
        if (nums[iValid] > nums[iValid - 1]) {
            iValid += 1;
            iTest += 1;

            continue;
        }
        
        // Find something bigger than the last valid number
        if (nums[iTest] <= nums[iValid - 1]) {
            iTest += 1;

            continue;
        }
        
        // Swap them
        swapIndices(nums, iTest, iValid);
    }
    
    return iValid;
};

function swapIndices(nums: number[], i1: number, i2: number): void {
    const tmp = nums[i1];
    nums[i1] = nums[i2];
    nums[i2] = tmp;
}