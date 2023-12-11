/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    const list = new Map();
    let last;
    for(let i = 0; i < arr.length; i++) {
        if(!list.has(arr[i])) {
            list.set(arr[i], 1);
            last = arr[i]
        } else {
            list.set(arr[i], list.get(arr[i]) + 1);
        }

    }
    
    for (const [key, value] of list) {        
        const percent = 100 * value / arr.length;        
        if(percent > 25) {
            return key;
        }
    }
};