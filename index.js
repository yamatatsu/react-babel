var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var task = require('./src/back/task.js');
var taskDao = require('./src/back/dao/taskDao.js');
var port = process.env.PORT || 5000;

//////////////////////
// setting http
app.use(morgan({ format: 'dev', immediate: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/.build/public'));
app.use(bodyParser.json());

// RESTful
// task(app);
app.get('/api/tasks', function(req, res, next) {
  taskDao.find('test', {}, {}, list => res.json({tasks: list}));
});

app.post('/api/tasks', function(req, res, next) {
  taskDao.insert(
    'test',
    {task_name: req.body.task_name},
    {},
    result => res.send(result.ops[0])
  );
});


// サーバーたてる
var server = http.createServer(app);
server.listen(port);
console.log("Node app is running at localhost:" + port);
