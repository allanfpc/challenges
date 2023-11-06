/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let found = nums.indexOf(target);
    
    if(found !== -1) {
        return found;
    }

    for(let i = 0; i < nums.length; i++) {
        if(target < nums[i]) {
            found = i;
            break
        }

        if(target > nums[i] && target < nums[i + 1]) {
            found = i+1;
            break;
        }
    }

    return found !== -1 ? found : nums.length;
};