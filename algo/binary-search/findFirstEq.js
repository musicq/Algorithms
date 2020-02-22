// 1 2 3 3 4 7 9 9 9 13
function findFirstEq(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = lo + ((hi - lo) >> 1);

    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      if (mid === 0 || arr[mid - 1] !== target) return mid;
      else hi = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 2, 3, 4, 6, 7, 8, 8, 8, 12];
let r = findFirstEq(arr, 8);

console.assert(r === 6);
