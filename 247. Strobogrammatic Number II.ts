// N: length of strobogrammatic numbers to find
// Time: O(N*N^(5/2))
// Space: O(N*N^(5/2))

function findStrobogrammatic(n: number): string[] {
    const oddMiddles = ["0", "1", "8"];
    const evenMiddles = ["00", "11", "88", "69", "96"];

    if (n === 1) {
        return oddMiddles;
    }

    // Build even solutions since they are the foundation of future solutions
    let lastEvenSolution = evenMiddles.slice(1); // remove "00"
    for (let i = 2; i <= n - 2; i += 2) {
        lastEvenSolution = lastEvenSolution.flatMap((num) => {
            const firstHalf = num.slice(0, num.length / 2);
            const lastHalf = num.slice(num.length / 2);

            return evenMiddles.map((middle) => firstHalf + middle + lastHalf);
        });
    }

    if (n % 2 === 0) {
        return lastEvenSolution;
    }

    // Build odd solution from last even solution
    return lastEvenSolution.flatMap((num) => {
        const firstHalf = num.slice(0, num.length / 2);
        const lastHalf = num.slice(num.length / 2);

        return oddMiddles.map((middle) => firstHalf + middle + lastHalf);
    });
}
