/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let n = 0;
    let calc;

    while(x) {
        calc = (n*n)
        if(calc === x) {
            break;
        }

        if(calc > x) {
            n = n - 1;
            break;
        }
        n++;
    }

    return n;
};