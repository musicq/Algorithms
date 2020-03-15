function mergesort(A) {
  let n = A.length;
  let t = new Array(n);

  msort(A, t, 0, n - 1);
}

function msort(A, t, l, r) {
  if (l < r) {
    let c = l + ((r - l) >> 1);
    msort(A, t, l, c);
    msort(A, t, c + 1, r);
    merge(A, t, l, c + 1, r);
  }
}

function merge(A, t, lPos, rPos, rEnd) {
  let lEnd = rPos - 1;
  let totalNum = rEnd - lPos + 1;
  let start = lPos;

  while (lPos <= lEnd && rPos <= rEnd) {
    t[start++] = A[lPos] < A[rPos] ? A[lPos++] : A[rPos++];
  }

  while (lPos <= lEnd) {
    t[start++] = A[lPos++];
  }

  while (rPos <= rEnd) {
    t[start++] = A[rPos++];
  }

  for (let i = 0; i < totalNum; i++, rEnd--) {
    A[rEnd] = t[rEnd];
  }
}

let A = [4, 1, 7, 3, 2, 8, 6, 5];
mergesort(A);
console.log(A);
