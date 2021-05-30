function quickSort(arr: number[], begin: number, end: number): void {
  if (end <= begin) return
  let pivot = partition(arr, begin, end)
  quickSort(arr, begin, pivot - 1)
  quickSort(arr, pivot + 1, end)
}

function partition(arr: number[], begin: number, end: number): number {
  let pivot = end
  let counter = begin

  for (let i = begin; i < end; i++) {
    if (arr[i] < arr[pivot]) {
      let t = arr[counter]
      arr[counter] = arr[i]
      arr[i] = t
      counter++
    }
  }

  let t = arr[pivot]
  arr[pivot] = arr[counter]
  arr[counter] = t

  return counter
}

let arr = [4,2,1,3]
quickSort(arr,0, 3)
console.log(arr)