// Time: O(1)
// Space: O(1)

function divisorGame(n: number): boolean {
    // The person who starts their turn with an even n will win. E.g. if n
    // is 2, Alice can -1 and Bob won't have a move. Since Alice starts first
    // she will win if n is even. Following this logic, if Alice starts off
    // with an odd number, her move will make it even no matter what, allowing
    // Bob to start his turn with an even number and evevntually winning.
    return n % 2 === 0;
}
