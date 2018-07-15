'use strict';

var http = require('http');
var rp = require('request-promise');

var server = http.createServer(function(req, res) {
res.writeHead(200, {"Content-Type": "text/html"});
res.end('<p>Here is a paragraph of <strong>HTML</strong>!</p>');
});

var zMove = 0;

this.zMove = "0.1";

var options = {
    method: 'POST',
    uri: 'http://127.0.0.1:8080/gcode',
    formData: {
        'gcode': "G91\n G1Z" + this.zMove + "F200\nG90\n"
    },
  };


rp(options)
    .then(function (parsedBody) {
        // POST succeeded...
    })
    .catch(function (err) {
        // POST failed...
    });

server.listen(8081);
