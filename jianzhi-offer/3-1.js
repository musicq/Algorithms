function duplicate(nums) {
  if (!nums || nums.length === 0) return;

  for (let i = 0; i < nums.length; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }

      let t = nums[i];
      nums[i] = nums[t];
      nums[t] = t;
    }
  }
}
