import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    search: function() {
      var promise = this.store.query('income', {stickerSymbol: "MSFT"});
      // var promise = this.store.findAll('income');
      console.log('find all promise', promise);
      promise.then(function(value) {
        console.log('promise  return', value);
        var resultArray = value.content;
        console.log('resultArray', resultArray);
        var incomeObject = resultArray[0]._data;
        console.log('promise  return data', incomeObject);
      }, function(reason) {
        console.log('error on promise', reason); 
      });
    }
  }
});
