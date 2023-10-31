/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const output = [];   
    for(let i = 0; i < nums.length; i++) {
        if(output.length > 0) {
            break;
        }
        const num = nums[i];
        for(let j = 0; j < nums.length && j !== i; j++) {            
            if(num + nums[j] === target) {
                output.push(i);
                output.push(j);
                break;
            }
        }
    }
    return output;
};