// N: length of string
// Time: O(N)
// Space: O(1)

function isPalindrome(s: string): boolean {
    // Remove all non-alphanumeric chars
    const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left = 0;
    let right = cleanedStr.length - 1;
    
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
};

