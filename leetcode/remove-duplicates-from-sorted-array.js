/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    let sp = 0;
    let fp = 1;

    while(fp < nums.length) {
        if (nums[sp] !== nums[fp]) {
            nums[sp + 1] = nums[fp];
            sp += 1;
        }
        fp += 1;
    }

    nums.length = sp + 1;
    return sp + 1;
};

