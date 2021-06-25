// N: number
// Time: O(N)
// Space: O(1)

function climbStairs(n: number): number {
    let prev = 0;
    let curr = 1;
    
    for (let i = 0; i < n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
};