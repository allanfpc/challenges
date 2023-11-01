/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let count = x.length - 1;
    let isPolindrome = true;
    for(let i = 0; i < x.length; i++) {        
        if(x[i] !== x[count]) {
            isPolindrome = false;
        }
        count -= 1;
    }

    return isPolindrome;
};