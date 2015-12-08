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
   @type {object}
   */
  balanceSheetMetadata: Ember.computed('model.balanceSheet', {
    get() {
      let model = this.get('model.balanceSheet');
      console.log('here is bal sheet home model', model);
      return model;
    }
  }),

  /**
   Income Statement Metadata

   @private
   @type {object}
   */
  incomeMetadata: Ember.computed('model.incomeStatement', {
    get() {
      let model = this.get('model.incomeStatement');
      console.log('here is income home model', model);
      return model;
    }
  }),

  /**
   Cash Flow Metadata

   @private
   @type {object}
   */
  cashFlowMetadata: Ember.computed('model.cashFlowStatement', {
    get() {
      let model = this.get('model.cashFlowStatement');
      console.log('here is cashflow home model', model);
      return model;
    }
  }),

  /**
   Common function used to merge real data along with the static metadata helper text

   @private
   @property mergeFinancialDataWtihMetadata
   */
  mergeFinancialDataWtihMetadata: function(hashMapObject, metadataSource) {
    let keyList = Object.keys(hashMapObject);
    keyList.forEach(function(key) {
      var financialDisplayWrapper = {
        value: hashMapObject[key],
        display: metadataSource[key].display,
        help: metadataSource[key].help
      };
      hashMapObject[key] = financialDisplayWrapper;
      console.log('financialDisplayWrapper', financialDisplayWrapper);
    });
  },

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
      var balanceSheetMetadata = this.get('balanceSheetMetadata');
      var incomeMetadata = this.get('incomeMetadata');
      var cashFlowMetadata = this.get('cashFlowMetadata');

      incomePromise.then(function(value) {
        var resultArray = value.content;
        var incomeObject = resultArray[0]._data;
        _this.mergeFinancialDataWtihMetadata(incomeObject, incomeMetadata);
        _this.set('income', incomeObject);
        console.log('incomeObject', incomeObject);
      }, function(reason) {
        console.log('error on income promise', reason);
      });

      balanceSheetPromise.then(function(value) {
        var resultArray = value.content;
        var balanceSheetObject = resultArray[0]._data;
        _this.mergeFinancialDataWtihMetadata(balanceSheetObject, balanceSheetMetadata);
        _this.set('balanceSheet', balanceSheetObject);
        console.log('balanceSheetObject', balanceSheetObject);
      }, function(reason) {
        console.log('error on balanceSheet promise', reason);
      });

      cashFlowPromise.then(function(value) {
        console.log('promise  return', value);
        var resultArray = value.content;
        console.log('resultArray', resultArray);
        var cashFlowObject = resultArray[0]._data;
        _this.mergeFinancialDataWtihMetadata(cashFlowObject, cashFlowMetadata);
        _this.set('cashFlow', cashFlowObject);
        console.log('cashFlow promise return data', cashFlowObject);
      }, function(reason) {
        console.log('error on cashFlow promise', reason);
      });
    }
  }
});
