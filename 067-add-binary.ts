function addBinary(a: string, b: string): string {
    const bitsArr = [];
    let carry = 0;
    
    let aPtr = a.length - 1;
    let bPtr = b.length - 1;
    
    while (aPtr >= 0 || bPtr >= 0) {
        const aBit = a[aPtr] === "1" ? 1 : 0;
        const bBit = b[bPtr] === "1" ? 1 : 0;
        
        const bitToPush = (aBit + bBit + carry) % 2;
        carry = (aBit + bBit + carry) > 1 ? 1 : 0;
        
        bitsArr.push(bitToPush);
        
        aPtr--;
        bPtr--;
    }
    
    if (carry) {
        bitsArr.push("1");
    }
    
    return bitsArr.reverse().join("");
};