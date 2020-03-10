let coins = [25, 10, 5, 1];
let result = [];

function coin(rest) {
  if (rest === 0) return result;

  let first = coins.filter(c => c <= rest)[0];

  return coin(rest - first, result.push(first));
}

console.log(coin(48));
