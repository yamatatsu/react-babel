var http = require('http');
var express = require('express');
var app = express();
var task = require('./src/back/task.js');
var port = process.env.PORT || 5000;

//////////////////////
// setting http
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/.build/public'));

// RESTful
task(app);

// サーバーたてる
var server = http.createServer(app);
server.listen(port);
console.log("Node app is running at localhost:" + port);
