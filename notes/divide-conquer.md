```python
def divide_conquer(problem, param1, param2, ...):
  # recursion terminator
  if problem is None:
	print_result
	return

  # prepare data
  data = prepare_data(problem)
  subproblems = split_problem(problem, data)

  # conquer subproblems
  subresult1 = self.divide_conquer(subproblems[0], p1, ...)
  subresult2 = self.divide_conquer(subproblems[1], p1, ...)
  subresult3 = self.divide_conquer(subproblems[2], p1, ...)
  …

  # process and generate the final result
  result = process_result(subresult1, subresult2, subresult3, …)

  # revert the current level states
```

牛顿迭代法原理

http://www.matrix67.com/blog/archives/361

牛顿迭代法代码

http://www.voidcn.com/article/p-eudisdmk-zm.html

http://www.matrix67.com/blog/archives/361

```c++
int mysqrt(int x){
	double tmpx = x;
	double k = 1.0;
	double k0 = 0.0;
	while(abs(k0-k) >= 1){
		k0 = k;
		k = (k + tmpx/k)/2;
	}
	return (int)k;
}
```
