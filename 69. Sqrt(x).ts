// N: x
// Time: O(sqrt(N))
// Space: O(1)

function mySqrt(x: number): number {
    let i = 1;

    while (i * i <= x) {
        i++;
    }

    return i - 1;
}
