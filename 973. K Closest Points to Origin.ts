// N: number of points
// Time: O(N*log(N))
// Space: O(N)

function kClosest(points: number[][], k: number): number[][] {
    const sortedPoints = points.sort(([x1, y1], [x2, y2]) => {
        const d1 = x1 ** 2 + y1 ** 2;
        const d2 = x2 ** 2 + y2 ** 2;

        return d1 - d2;
    });

    return sortedPoints.slice(0, k);
}
