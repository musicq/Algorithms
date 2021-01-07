# 题目

```txt
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

0 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
```

# 思路

假设其中一个字符串是最大的 prefix，通过两两比较，来不断缩 prefix 以求出二者最长的 prefix。

由于公共 prefix 一定是所有字符串共有的 prefix，所以最后求出的 prefix 一定是最长的。