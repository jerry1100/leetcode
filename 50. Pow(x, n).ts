// N: power
// Time: O(log(N))
// Space: O(log(N)) due to recursion

function myPow(x: number, n: number): number {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        return 1 / myPow(x, -n);
    }

    const half = myPow(x, Math.floor(n / 2));

    return half * half * (n % 2 ? x : 1);
}
