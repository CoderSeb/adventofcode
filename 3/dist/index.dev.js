"use strict";

var fs = require('fs');

var theWoods = fs.readFileSync('./3.txt', 'utf8').split(/\r?\n/);
var indexCounter = 3;

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }

  var chars = this.split('');
  chars[index] = replacement;
  return chars.join('');
};

theWoods.forEach(function (row) {
  if (row[indexCounter] === '#') {
    row.replaceAt(indexCounter, 'X');
    console.log(row);
  } //indexCounter += 3

});