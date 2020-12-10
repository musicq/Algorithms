var minMutation = function (start, end, bank) {
  if (start === end) return 0
  if (bank.length === 0) return -1

  let level = 0
  let visited = new Set([start])
  let gens = ['A', 'C', 'G', 'T']
  let stack = [start]

  while (stack.length !== 0) {
    let len = stack.length

    while (len-- > 0) {
      let gen = stack.shift()
      if (gen === end) return level

      let curGen = gen.split('')
      for (let i = 0; i < curGen.length; i++) {
        let old = curGen[i]

        for (let g of gens) {
          curGen[i] = g
          let newGen = curGen.join('')

          if (!visited.has(newGen) && bank.includes(newGen)) {
            stack.push(newGen)
            visited.push(newGen)
          }
        }

        curGen[i] = old
      }
    }

    level++
  }

  return -1
}
