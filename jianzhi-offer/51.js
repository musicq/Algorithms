function inversePairs(A) {
  if (!A || A.length < 2) return 0;

  let n = A.length;
  let t = new Array(n);

  return msort(A, t, 0, n - 1);
}

function msort(A, t, l, r) {
  if (l === r) return 0;

  let c = l + ((r - l) >> 1);
  let pairsL = msort(A, t, l, c);
  let pairsR = msort(A, t, c + 1, r);
  let pairs = merge(A, t, l, c + 1, r);

  return pairs + pairsL + pairsR;
}

function merge(A, t, lp, rp, re) {
  let total = re - lp + 1;
  let le = rp - 1;
  let p = re;
  let pairs = 0;

  while (le >= lp && re >= rp) {
    if (A[le] > A[re]) {
      pairs += re - rp + 1;
      t[p--] = A[le--];
    } else {
      t[p--] = A[re--];
    }
  }

  while (le >= lp) t[p--] = A[le--];
  while (re >= rp) t[p--] = A[re--];

  for (let i = total - 1; i >= 0; i--) {
    A[lp] = t[lp++];
  }

  return pairs;
}
