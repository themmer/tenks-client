module.exports = function(app) {
  var express = require('express');
  var cashflowStatementRouter = express.Router();

  cashflowStatementRouter.get('/', function(req, res) {
    res.send({
      'cashflow-statement': []
    });
  });

  cashflowStatementRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  cashflowStatementRouter.get('/:id', function(req, res) {
    res.send({
      'cashflow-statement': {
        id: req.params.id
      }
    });
  });

  cashflowStatementRouter.put('/:id', function(req, res) {
    res.send({
      'cashflow-statement': {
        id: req.params.id
      }
    });
  });

  cashflowStatementRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/cashflow-statement', cashflowStatementRouter);
};
