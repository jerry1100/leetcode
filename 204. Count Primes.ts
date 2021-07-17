// N: number
// Time: O(sqrt(N)*log(log(N))) apparently
// Space: O(N)

function countPrimes(n: number): number {
    const isPrimeAt = new Array(n).fill(true);
    isPrimeAt[0] = false;
    isPrimeAt[1] = false;

    for (let i = 2; i ** 2 <= n; i++) {
        if (!isPrimeAt[i]) {
            continue;
        }

        // Multiples of i are not prime
        for (let j = i ** 2; j < n; j += i) {
            isPrimeAt[j] = false;
        }
    }

    return isPrimeAt.reduce((sum, isPrime) => sum + (isPrime ? 1 : 0), 0);
}
