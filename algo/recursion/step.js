let map = new Map();

function count(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (map.has(n)) return map.get(n);

  let s = count(n - 1) + count(n - 2);

  map.set(n, s);

  return s;
}

let r = count(3);
