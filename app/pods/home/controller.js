import Ember from 'ember';

export default Ember.Controller.extend({
  stickerSymbol: 'MSFT',

  balanceSheet: null,

  income: null,

  cashFlow: null,

  test: 'This is my test!',

  actions: {
    searchRequest: function() {
      var stickerSymbol = this.get('stickerSymbol');
      var _this = this;
      var incomePromise = this.store.query('income', {stickerSymbol: stickerSymbol});
      var balanceSheetPromise = this.store.query('balance-sheet', {stickerSymbol: stickerSymbol});
      var cashFlowPromise = this.store.query('cash-flow', {stickerSymbol: stickerSymbol});

      incomePromise.then(function(value) {
        console.log('promise  return', value);
        var resultArray = value.content;
        console.log('resultArray', resultArray);
        var incomeObject = resultArray[0]._data;
        _this.set('income', incomeObject);
        console.log('Income promise  return data', incomeObject);
      }, function(reason) {
        console.log('error on income promise', reason);
      });

      balanceSheetPromise.then(function(value) {
        console.log('promise  return', value);
        var resultArray = value.content;
        console.log('resultArray', resultArray);
        var balanceSheetObject = resultArray[0]._data;
        // _this.set('balanceSheet', balanceSheetObject);
        console.log('balanceSheet promise return data', balanceSheetObject);
      }, function(reason) {
        console.log('error on balanceSheet promise', reason);
      });

      cashFlowPromise.then(function(value) {
        console.log('promise  return', value);
        var resultArray = value.content;
        console.log('resultArray', resultArray);
        var cashFlowObject = resultArray[0]._data;
        _this.set('cashFlow', cashFlowObject);
        console.log('cashFlow promise return data', cashFlowObject);
      }, function(reason) {
        console.log('error on cashFlow promise', reason);
      });
    }
  }
});
