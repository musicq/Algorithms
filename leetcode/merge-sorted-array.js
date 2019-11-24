/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let needSort = false;
    let i = j = 0;
    let lastIdx = 0;

    while (i < m + n) {
        if (nums1[i] > nums2[j] && i < m) {
            nums1[m] = nums2[j];
            m += 1;
            j += 1;
            n -= 1;
            lastIdx += 1;
            needSort = true;
        } else {
            if (needSort) {
                reverse(nums1, i, m-1);
                reverse(nums1, i, i + lastIdx - 1)
                reverse(nums1, i + lastIdx, m-1);

                lastIdx = 0;
                needSort = false;
            }

            if (i >= m) {
                nums1[i] = nums2[j];
                j += 1;
            }

            i += 1;
        }
    }

    return nums1;
};

function reverse(list, start, end) {
    while(start < end) {
        const t = list[start];
        list[start] = list[end];
        list[end] = t;
        start += 1;
        end -= 1;
    }
}
