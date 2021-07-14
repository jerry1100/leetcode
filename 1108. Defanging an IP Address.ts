// N: length of string
// Time: O(N)
// Space: O(1) not including space reserved for output

function defangIPaddr(address: string): string {
    let output = "";

    for (const letter of address) {
        if (letter === ".") {
            output += "[.]";
        } else {
            output += letter;
        }
    }

    return output;
}
