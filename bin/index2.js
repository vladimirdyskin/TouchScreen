'use strict';
var Iconv  = require('iconv').Iconv;
var Buffer = require('buffer').Buffer;

var cmp = "t6"
var text = "привет";
var iconv = new Iconv( 'UTF-8', 'ISO-8859-5');
var textRus = iconv.convert(text);
cmp += '.txt="';
var arr = [];
for (var i = 0, l = String(cmp).length; i < l; i++) {
  var ascii = String(cmp).charCodeAt(i);
  arr.push(ascii);
}

for (var i = 0, l = String(textRus).length; i < l; i++) {
  var ascii = textRus[i];
  arr.push(ascii);
}
arr.push(0x22);
arr.push(255);
arr.push(255);
arr.push(255);
var b = new Buffer(arr);

console.log(textRus);
console.log(b);
