const fs = require('fs')

const theWoods = fs.readFileSync('./3.txt', 'utf8').split(/\r?\n/)

const indexCounter = 3

String.prototype.replaceAt = function(index, replacement) {
  if (index >= this.length) {
      return this.valueOf();
  }
  let chars = this.split('');
  chars[index] = replacement;
  return chars.join('');
}

theWoods.forEach(row => {
  if (row[indexCounter] === '#') {
    row.replaceAt(indexCounter, 'X')
    console.log(row)
  }
  
  //indexCounter += 3
})

