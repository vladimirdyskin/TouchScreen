'use strict';
var Iconv  = require('iconv').Iconv;
var Buffer = require('buffer').Buffer;

var text = "t6.txt=\"я\"";
var iconv = new Iconv( 'UTF-8', 'ISO-8859-5');
var textRus = iconv.convert(text);
// textRus.push(255);
// textRus.push(255);
// textRus.push(255);
// var str = "";
var arr = [];
for (var i = 0, l = String(textRus).length; i < l; i++) {
  var ascii = String(textRus).charCodeAt(i);
  arr.push(ascii);
}
arr.push(255);
arr.push(255);
arr.push(255);
var b = new Buffer(arr);

console.log(textRus);
console.log(b);
