/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {    

    const integer = digits.join('').length <= 16 ? parseInt(digits.join('')): BigInt(digits.join(''));
    
    
    const sum = typeof(integer) === 'bigint' ? integer + 1n : integer + 1

    return (Array.from(sum.toString()).map(Number));
};