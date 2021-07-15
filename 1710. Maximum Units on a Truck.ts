// N: number of box types
// Time: O(N*log(N))
// Space: O(N)

function maximumUnits(boxTypes: number[][], truckSize: number): number {
    // Sorted by most to least # of units per box
    const topBoxTypes = boxTypes
        .map((boxType) => [...boxType])
        .sort(([, numUnits1], [, numUnits2]) => numUnits2 - numUnits1);

    let numLoadedBoxes = 0;
    let numLoadedUnits = 0;
    for (
        let i = 0;
        i < topBoxTypes.length && numLoadedBoxes <= truckSize;
        i++
    ) {
        const [numBoxes, numUnitsPerBox] = topBoxTypes[i];
        const numCanLoad = Math.min(numBoxes, truckSize - numLoadedBoxes);

        numLoadedBoxes += numCanLoad;
        numLoadedUnits += numCanLoad * numUnitsPerBox;
    }

    return numLoadedUnits;
}
