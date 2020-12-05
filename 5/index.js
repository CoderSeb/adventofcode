const fs = require('fs')

const input = fs.readFileSync('./5.txt', 'utf8').split(/\s+/)

const boardingPasses = []

// Part One
const boardingOne = (input) => {
  input.map((bpass) => {
    bpass = bpass.replace(/F|L/g, 0).replace(/B|R/g, 1)
    bpass = parseInt(bpass, 2)
    boardingPasses.push(bpass)
  })
}

boardingOne(input)

console.log(Math.max(...boardingPasses))

// Part Two
const objBoardingPasses = new Set(boardingPasses)

for (const id of objBoardingPasses.values()) {
  if (objBoardingPasses.has(id - 2) && !objBoardingPasses.has(id - 1)) {
    console.log(id - 1)
  }
}
