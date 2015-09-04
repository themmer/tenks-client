module.exports = function(app) {
  var express = require('express');
  var incomeStatementRouter = express.Router();

  incomeStatementRouter.get('/', function(req, res) {
    res.send({
      'income-statement': []
    });
  });

  incomeStatementRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  incomeStatementRouter.get('/:id', function(req, res) {
    res.send({
      'income-statement': {
        id: req.params.id
      }
    });
  });

  incomeStatementRouter.put('/:id', function(req, res) {
    res.send({
      'income-statement': {
        id: req.params.id
      }
    });
  });

  incomeStatementRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/income-statement', incomeStatementRouter);
};
