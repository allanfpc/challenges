/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let priorityOrderedRomanNumbers = {IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900};
    let orderedRomanNumbers = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    
    let integer = 0;

    for(const key in priorityOrderedRomanNumbers) {
        if(s.indexOf(key) !== -1) {
            integer += priorityOrderedRomanNumbers[key];
            s = s.replace(key, '');
        }
    }

    for(let i = 0; i < s.length; i++) {
        for(const key in orderedRomanNumbers) {        
            if(s[i] === key) {
                integer += orderedRomanNumbers[key];
            }
        }
        
    }

    return integer;
};