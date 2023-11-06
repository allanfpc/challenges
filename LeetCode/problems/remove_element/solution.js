/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            let temp = nums[count];
            nums[count] = nums[i];
            nums[i] = temp;
            count++;
        }
    }
    return count;
};