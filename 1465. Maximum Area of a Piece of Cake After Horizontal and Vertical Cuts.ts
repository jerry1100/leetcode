// N: number of horizontal cuts
// M: number of vertical cuts
// Time: O(N*log(N) + M*log(M))
// Space: O(N + M)

function maxArea(
    h: number,
    w: number,
    horizontalCuts: number[],
    verticalCuts: number[]
): number {
    const horizontalEdges = [0, ...horizontalCuts, h].sort((a, b) => a - b);
    const verticalEdges = [0, ...verticalCuts, w].sort((a, b) => a - b);

    let maxWidth = 0;
    let maxHeight = 0;

    for (let i = 0; i < horizontalEdges.length - 1; i++) {
        maxWidth = Math.max(
            maxWidth,
            horizontalEdges[i + 1] - horizontalEdges[i]
        );
    }
    for (let i = 0; i < verticalEdges.length - 1; i++) {
        maxHeight = Math.max(
            maxHeight,
            verticalEdges[i + 1] - verticalEdges[i]
        );
    }

    const maxArea = BigInt(maxWidth) * BigInt(maxHeight);
    const modulo = BigInt(10 ** 9 + 7);

    return Number(maxArea % modulo);
}
