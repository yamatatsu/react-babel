var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var task = require('./src/back/task.js');
var port = process.env.PORT || 5000;

//////////////////////
// setting http
app.use(morgan({ format: 'dev', immediate: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/.build/public'));
app.use(bodyParser.json());

// RESTful
task(app);


// サーバーたてる
var server = http.createServer(app);
server.listen(port);
console.log("Node app is running at localhost:" + port);
