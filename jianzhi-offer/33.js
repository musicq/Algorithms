var verifyPostorder = function(postorder) {
  if (!postorder || postorder.lenght === 0) return true;

  return verify(postorder, 0, postorder.length - 1);
};

function verify(A, start, end) {
  if (start >= end) return true;

  let l = start;
  while (A[l] < A[end]) l++;
  let m = l;
  while (A[l] > A[end]) l++;

  return l === end && verify(A, start, m - 1) && verify(A, m, end - 1);
}
