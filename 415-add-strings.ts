function addStrings(num1: string, num2: string): string {
    const sumArr = [];
    let carry = 0;
    
    let iDigit1 = num1.length - 1;
    let iDigit2 = num2.length - 1;

    while (iDigit1 >= 0 || iDigit2 >= 0) {
        const digit1 = iDigit1 >= 0 ? digitToInteger(num1[iDigit1]) : 0;
        const digit2 = iDigit2 >= 0 ? digitToInteger(num2[iDigit2]) : 0;
        
        const preSum = digit1 + digit2 + carry;
        const digitSum = preSum % 10;
        carry = preSum > 9 ? 1 : 0; 
        
        sumArr.push(digitSum);
        
        iDigit1--;
        iDigit2--;
    }
    
    if (carry) {
        sumArr.push(carry);
    }
    
    return sumArr.reverse().join("");
};

function digitToInteger(digitString: string): number {
    const charCodeOffset = "0".charCodeAt(0);

    return digitString.charCodeAt(0) - charCodeOffset;
}