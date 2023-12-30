/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {    
    n = n.toString();
    const ocurred = [];
    while(n) {
        let sum = 0;        
        for(let i = 0; i < n.length; i++) {
            n[i] = parseInt(n[i]);
            sum += (n[i] * n[i]);
        }
        n = sum.toString();
        if(n == 1 || ocurred.includes(n)) {
            break;
        }
        ocurred.push(n);
    }

    return n == 1 ? true : false;
};