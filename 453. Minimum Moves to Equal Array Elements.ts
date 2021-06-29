// N: number of nums
// Time: O(N)
// Space: O(1)

function minMoves(nums: number[]): number {
    let sum = 0;
    let min = Infinity;
    
    for (const num of nums) {
        sum += num;
        min = Math.min(min, num);
    }
    
    return sum - nums.length * min;
};

/*
Relies on the following principles:
1) Incrementing N-1 elements is the same as decrementing one element. Adding 1 to each element is a noop. Incrementing N-1 elements is noop - 1. Decrementing one element is just - 1.
2) The min number of moves it takes to decrement all numbers to 0, one at a time, is just the sum of the numbers after the smallest number goes to 0.
*/