/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1;
  }

  for (let o in map) {
    if (map[o] === 1) return o;
  }

  return ' ';
};

// use char code
var firstUniqChar = function(s) {
  if (!s || s.trim() === '') return ' ';

  let f = new Array(26).fill(0); // assume only containes a-z
  let a = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    f[s[i].charCodeAt(0) - a]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (f[s[i].charCodeAt(0) - a] === 1) return s[i];
  }

  return ' ';
};
