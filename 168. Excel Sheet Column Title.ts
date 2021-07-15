// N: column number
// Time: O(log N)
// Space: O(1) not including space reserved for output

function convertToTitle(columnNumber: number): string {
    const CHAR_CODE_OFFSET = "A".charCodeAt(0);
    const letters: string[] = [];

    let num = columnNumber;
    while (num > 0) {
        // Our conversion logic expects 0-based numbers, but Excel uses 1-based
        num--;

        // Convert coefficient in 1s place to Excel column letter
        const leastSigBitCoeff = num % 26;
        const charCode = leastSigBitCoeff + CHAR_CODE_OFFSET;
        letters.unshift(String.fromCharCode(charCode));

        // Shift coefficients right (10s place => 1s place)
        num = Math.floor(num / 26);
    }

    return letters.join("");
}

/*
Explanation:
A normal base26 system maps A => 0, B => 1, ..., Z => 25
With Excel, the mapping is A => 1, B => 2, ..., Z => 26

Equation for a given number n in a normal base26 system, where coefficients range from [0, 25]:
n = (c2)26^2 + (c1)26^1 + (c0)26^0

To translate this to Excel's system, we +1 all our coefficients, which now range from [1, 26]:
n = (c2+1)26^2 + (c1+1)26^1 + (c0+1)26^0

Our conversion logic works by extracting the coefficient at the 1s place (c0), then shifting
the coefficients to the right, where they will be extracted in future loop iterations.

Here's how to extract out the coefficient:
1. We start with our equation:

    n = (c2+1)26^2 + (c1+1)26^1 + (c0+1)

2. We then subtract 1 from each side. This is important otherwise c0+1 could be 26, which will
   throw off the modulo and division steps.

    n-1 = (c2+1)26^2 + (c1+1)26^1 + c0

3. We can then get c0 with modulo 26:

    c0 = (n-1) % 26

To shift the coefficients to the right for the next iteration:
1. Start with our n-1 equation

        n-1 = (c2+1)26^2 + (c1+1)26^1 + c0

2. Divide by 26 then floor result to remove c0 and shift remaining terms

    (n-1) / 26 = (c2+1)26^1 + (c1+1)
*/
