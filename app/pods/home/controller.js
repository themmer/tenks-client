import Ember from 'ember';

export default Ember.Controller.extend({
  tickerSymbol: 'MSFT',

  compTickerSymbol: 'IBM',

  balanceSheet: null,

  income: null,

  cashFlow: null,

  /**
   Balance Sheet metadata

   @private
   @property modalWindowCancelText
   @type {string}
   */
  balanceSheetMetadata: Ember.computed('model.metadatas', {
    get() {
      let model = this.get('model');
      console.log('here is bal sheet home model', model.balanceSheet);
      return model.balanceSheet;
    }
  }),

  /**
   Income Statement Metadata

   @private
   @property modalWindowCancelText
   @type {string}
   */
  incomeMetadata: Ember.computed('model', {
    get() {
      let model = this.get('model');
      console.log('here is income home model', model.incomeStatement);
      return model.incomeStatement;
    }
  }),

  /**
   Cash Flow Metadata

   @private
   @property modalWindowCancelText
   @type {string}
   */
  cashFlowMetadata: Ember.computed('model', {
    get() {
      let model = this.get('model');
      console.log('here is cashflow home model', model.cashFlowStatement);
      return model.cashFlowStatement;
    }
  }),


  actions: {
    addCompetitor: function(competitorStickerSymbol) {
      console.log('adding competitor', competitorStickerSymbol);
    },
    searchRequest: function() {
      var tickerSymbol = this.get('tickerSymbol');
      var incomePromise = this.store.query('income', {tickerSymbol: tickerSymbol});
      var balanceSheetPromise = this.store.query('balance-sheet', {tickerSymbol: tickerSymbol});
      var cashFlowPromise = this.store.query('cash-flow', {tickerSymbol: tickerSymbol});
      var _this = this;

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
        _this.set('balanceSheet', balanceSheetObject);
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
