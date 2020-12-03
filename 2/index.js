// Part One
const fs = require('fs')

const allLines = fs.readFileSync('./2/2.txt', 'utf-8').trim().split('\r\n')
const result = allLines.filter(entry => {
    const [,min, max, target, pass,] = entry.split(/(\d+)-(\d+) (\w): (\w+)/)
    return [...pass].filter(line => line === target).length >= min
    && [...pass].filter(line => line === target).length <= max
})
console.log(result.length)

// Part Two
const resultTwo = allLines.filter(entry => {
  const [,min, max, target, pass,] = entry.split(/(\d+)-(\d+) (\w): (\w+)/)
  return [...pass][min - 1] === target ^ [...pass][max - 1] === target
})
console.log(resultTwo.length)
