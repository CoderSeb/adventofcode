const fs = require('fs')

// Part One
const input = fs.readFileSync('./4.txt', 'utf8')
  .split('\r\n\r\n')
  .map(fullEntry => fullEntry.split(/[ \r\n]/))
  .map(trimmedEntry => trimmedEntry.filter(a => a))
  .filter(pass => {
    return pass.length === 8 || (pass.length === 7 && !pass.some(e => /cid.*/.test(e)))
  })

console.log(input.length)


// Part Two
const inputTwo = input.map(a => {
  return Object.assign({}, ...a.map(b => {
    return {
      [b.split(':')[0]]: b.split(':')[1]
    }
  }))
}).filter(pass => {
  if (pass.hgt.split('cm').length === 2) {
    return pass.hgt.split('cm')[0] >= 150 && pass.hgt.split('cm')[0] <= 193
  }
  if (pass.hgt.split('in').length === 2) {
    return pass.hgt.split('in')[0] >= 59 && pass.hgt.split('in')[0] <= 76
  } else {
    return false
  }
}).filter(pass => {
    return pass.byr.length === 4 && pass.byr >= 1920 && pass.byr <= 2002
  })
  .filter(pass => {
    return pass.iyr.length === 4 && pass.iyr >= 2010 && pass.iyr <= 2020
  })
  .filter(pass => {
    return pass.eyr.length === 4 && pass.eyr >= 2020 && pass.eyr <= 2030
  })
  .filter(pass => {
    return /#[a-f0-9]{6}$/.test(pass.hcl)
  })
  .filter(pass => {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
      .includes(pass.ecl)
  })
  .filter(pass => {
    return pass.pid.length === 9
})

console.log(inputTwo.length)
