'use strict';
var Iconv  = require('iconv').Iconv;

var Buffer = require('buffer').Buffer;

var SerialPort = require('serialport');
var port = new SerialPort('COM11', function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});

var cmp = "t6"
var text = "работает!!!";
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

port.write(b, function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});


console.log(textRus);
console.log(b);

var txt ='page home';
var arr2 = [];
for (var i = 0, l = String(txt).length; i < l; i++) {
  var ascii = String(txt).charCodeAt(i);
  arr2.push(ascii);
}
arr2.push(255);
arr2.push(255);
arr2.push(255);
var b2 = new Buffer(arr2);
port.write(b2, function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
