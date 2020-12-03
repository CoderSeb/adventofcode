const fs = require('fs')

const theWoods = fs.readFileSync('./3.txt', 'utf8').split(/\r?\n/)

const countTrees = function (slopeX, slopeY) {
  let x = 0
  let y = 0
  let trees = 0
  while (y < theWoods.length) {
    trees += theWoods[y][x % theWoods[0].length] === '#'
    x += slopeX
    y += slopeY
  }
  return trees
}

// Part One
console.log(countTrees(3, 1))

// Part Two
console.log(countTrees(1, 1)
          * countTrees(3, 1)
          * countTrees(5, 1)
          * countTrees(7, 1)
          * countTrees(1, 2))
