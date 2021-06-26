function isAlienSorted(words: string[], order: string): boolean {
    const positions = new Map<string, number>();
    for (let i = 0; i < order.length; i++) {
        positions.set(order[i], i);
    }

    for (let i = 0; i < words.length - 1; i++) {
        if (!isSorted(words[i], words[i + 1], positions)) {
            return false;
        }
    }
    
    return true;
};

function isSorted(first: string, second: string, positions: Map<string, number>): boolean {
    for (let i = 0; i < first.length; i++) {
        const firstPos = positions.get(first[i]);
        const secondPos = positions.get(second[i]);
        
        if (firstPos < secondPos) {
            return true;
        }
        if (firstPos > secondPos) {
            return false;
        }
    }

    // At this point, everything is sorted up to first.length. We just need to make
    // sure first is not longer than second.
    return first.length <= second.length;
}