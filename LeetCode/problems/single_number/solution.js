/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    const result = new Map();

    for(let i = 0; i < nums.length; i++) {      
        const num = nums[i];
        const resultNum = result.get(num);
         
        if(resultNum) {
            result.set(num, resultNum + 1);
        } else {
            result.set(num, 1);
        }
    }

    for([key, value] of result) {
        if(value === 1) {
            return key;
        }
    }
};