module.exports = function(app) {
  var express = require('express');
  var balanceSheetRouter = express.Router();

  balanceSheetRouter.get('/', function(req, res) {
    res.send({
      'balance-sheet': []
    });
  });

  balanceSheetRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  balanceSheetRouter.get('/:id', function(req, res) {
    res.send({
      'balance-sheet': {
        id: req.params.id
      }
    });
  });

  balanceSheetRouter.put('/:id', function(req, res) {
    res.send({
      'balance-sheet': {
        id: req.params.id
      }
    });
  });

  balanceSheetRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/balance-sheet', balanceSheetRouter);
};
