/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    const reverse = (list, start, end) => {
        while(start < end) {
            const t = list[start];
            list[start] = list[end];
            list[end] = t;
            start++;
            end--;
        }
    }

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length -1);
};

