var express = require('express');
var router = express.Router();
var taskDao = require('./dao/taskDao.js');

router.get('/', function(req, res, next) {
  taskDao.find('test', {}, {}, list => res.json({tasks: list}));
});

router.get('/:id', function(req, res, next) {
  res.json({
    user: {userId: 1, userName: 'チョッパー'}
  });
});

router.post('/', function(req, res, next) {
  console.log(req.params);
  console.log(req.body);

  var record = {task_name: req.params.task_name};

  taskDao.insert(
    'test',
    record,
    {},
    result => res.send(result)
  );
});

router.put('/:id', function(req, res, next) {
  console.log(req.params);
  res.json({
    user: {userId: 1, userName: 'トニートニー・チョッパー'}
  });
});

router.delete('/:id', function(req, res, next) {
  console.log(req.params);
  res.json({
    user: {userId: 2, userName: 'Dr.クレハ'}
  });
});

module.exports = app => app.use('/api/tasks', router);
