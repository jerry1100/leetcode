// N: length of string
// Time: O(N)
// Space: O(1)
function countBinarySubstrings(s: string): number {
    let res = 0;
    let currGroup = 1; // # consecutive bits of current kind
    let prevGroup = 0; // # consecutive bits of previous kind
    
    for (let i = 1; i < s.length; i++) {
        // Still in current group
        if (s[i] === s[i - 1]) {
            currGroup++;
            continue;
        }
        
        // Start of new group
        res += Math.min(prevGroup, currGroup); // substring limited by smaller group
        prevGroup = currGroup;
        currGroup = 1;
    }
    
    return res + Math.min(prevGroup, currGroup);
};