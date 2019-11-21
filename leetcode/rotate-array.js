/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (k === 0) {
        return nums;
    }
    
    for (let i = 0; i < k; i++) {
        const last = nums.pop();
        nums.unshift(last);
    }
    
    return nums;
};
