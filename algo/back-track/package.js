let max = Number.MIN_VALUE;
let items = [2, 2, 4, 6, 3];
let n = 5;
let w = 9;

function f(i, cw) {
  if (i === n || cw > max) {
    max = cw;
    return;
  }

  f(i + 1, cw);

  if (items[i] + cw <= w) {
    f(i + 1, cw + items[i]);
  }
}

f(0, 0);

console.log(max);
