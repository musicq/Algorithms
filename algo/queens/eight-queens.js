let result = new Array(8);

function cal8queens(row) {
  if (row === 8) {
    print(result);
    return;
  }

  for (let col = 0; col < 8; col++) {
    if (isOk(row, col)) {
      result[row] = col;
      cal8queens(row + 1);
    }
  }
}

function isOk(row, col) {
  let leftTop = col - 1;
  let rightTop = col + 1;

  while (row > 0) {
    if (result[row - 1] === col) return false;
    if (leftTop >= 0) {
      if (result[row - 1] === leftTop) return false;
    }
    if (rightTop < 8) {
      if (result[row - 1] === rightTop) return false;
    }

    leftTop--;
    rightTop++;
    row--;
  }

  return true;
}

function print(result) {
  let s = '';

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < 8; j++) {
      if (j === result[i]) s += 'Q ';
      else s += '* ';
    }
    s += '\n';
  }
  s += '\n';

  console.log(s);
}

cal8queens(0);
