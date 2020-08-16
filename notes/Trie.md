# Trie 字典树

```python
class Trie(object):

	def __init__(self):
		self.root = {}
		self.end_of_word = "#"

	def insert(self, word):
		node = self.root
		for char in word:
			node = node.setdefault(char, {})
		node[self.end_of_word] = self.end_of_word

	def search(self, word):
		node = self.root
		for char in word:
			if char not in node:
				return False
			node = node[char]
		return self.end_of_word in node

	def startsWith(self, prefix):
		node = self.root
		for char in prefix:
			if char not in node:
				return False
			node = node[char]
		return True
```

# 并查集

```python
# Python

def init(p):
	# for i = 0 .. n: p[i] = i;
	p = [i for i in range(n)]

def union(self, p, i, j):
	p1 = self.parent(p, i)
	p2 = self.parent(p, j)
	p[p1] = p2

def parent(self, p, i):
	root = i
	while p[root] != root:
		root = p[root]
	while p[i] != i: # 路径压缩 ?
		x = i; i = p[i]; p[x] = root
	return root
```
