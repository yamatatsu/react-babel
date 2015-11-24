var express = require('express');
var router = express.Router();
var taskDao = require('./dao/taskDao.js');

router.get('/', function(req, res, next) {
  taskDao.find('test', {}, {}, list => res.json({tasks: list}));
});

router.post('/', function(req, res, next) {
  taskDao.insert(
    'test',
    {task_name: req.body.task_name},
    {},
    result => res.send(result.ops[0])
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
