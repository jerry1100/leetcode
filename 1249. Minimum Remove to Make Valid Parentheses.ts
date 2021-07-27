// N: length of string
// Time: O(N)
// Space: O(N)

function minRemoveToMakeValid(s: string): string {
    const res: string[] = [];
    let numOpenParens = 0;

    // Remove excess close parens
    for (const char of s) {
        if (char === "(") {
            numOpenParens++;
        }

        if (char === ")") {
            if (numOpenParens === 0) {
                continue;
            }

            numOpenParens--;
        }

        res.push(char);
    }

    // Remove excess open parens
    for (let i = res.length; i >= 0 && numOpenParens > 0; i--) {
        if (res[i] === "(") {
            res[i] = "";
            numOpenParens--;
        }
    }

    return res.join("");
}
