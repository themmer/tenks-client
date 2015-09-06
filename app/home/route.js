import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    search: function() {
      console.log('wow we did it!');

      var promise = this.get('store').query('income', {stickerSymbol: 'MSFT'});
      // var promise = this.store.findAll('income');
      console.log('find all promise', promise);

      promise.then(function(value) {
        // on fulfillment
        console.log('promise  return', value);
      }, function(reason) {
        console.log('error on promise', reason);
        // on rejection
      });



    }
  }
});
