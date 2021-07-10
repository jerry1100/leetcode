// N: length of flowerbed
// Time: O(N)
// Space: O(1)

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let prev = 0;
    let numPlanted = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        let curr = flowerbed[i];
        const next = flowerbed[i + 1];

        if (!prev && !curr && !next) {
            curr = 1;
            numPlanted++;
        }

        if (numPlanted >= n) {
            return true;
        }

        prev = curr;
    }

    return false;
}
