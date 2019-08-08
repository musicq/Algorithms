/**
 * 'abcabcbb' -> 'abc', 3
 * 'bbbbb' -> 'b', 1
 * 'pwwkew' -> wke, 3
 */
export function lengthOfLongestSubstring(str: string) {
  let prev: string[] = [];
  let cur: string[] = [];

  let s = 0;
  while (s < str.length) {
    const st = str[s];
    const index = cur.indexOf(st);

    s++;

    if (index > -1 && prev.length <= cur.length) {
      if (prev.length < cur.length) {
        prev = cur;
      }
      cur = prev.slice(index + 1);
    }

    cur.push(st);
  }

  console.log(prev.length < cur.length ? cur : prev);
  return Math.max(prev.length, cur.length);
}
