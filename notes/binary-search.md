二分查找代码模板

```python
left, right = 0, len(array) - 1

while left <= right:
	  mid = (left + right) / 2
	  if array[mid] == target:
		    # find the target!!
		    break or return result
	  elif array[mid] < target:
		    left = mid + 1
	  else:
		    right = mid - 1
```

```js
let left = 0,
  right = len(array) - 1

while (left <= right) {
  let mid = (left + right) >> 1
  if (array[mid] === target) {
    /*find the target*/ return
  } else if (array[mid] < target) left = mid + 1
  else right = mid - 1
}
```

Fast InvSqrt() 扩展阅读

https://www.beyond3d.com/content/articles/8/
