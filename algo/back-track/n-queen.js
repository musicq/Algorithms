let result = new Array(8)

function cal8Queens(row) {
  if (row === 8) {
    console.log(result)
    return
  }

  for (let c = 0; c < 8; c++) {
    if (isOk(row, c)) {
      result[row] = c
      cal8Queens(row + 1)
    }
  }
}

function isOk(row, col) {
  let leftTop = col - 1
  let rightTop = col + 1

  for (let r = row - 1; r >= 0; r--) {
    if (result[r] === col) return false
    if (leftTop >= 0) {
      if (result[r] === leftTop) return false
    }
    if (rightTop < 8) {
      if (result[r] === rightTop) return false
    }
    leftTop--
    rightTop++
  }

  return true
}

cal8Queens(0)

