import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    search: function() {
      console.log('wow we did it!');

      var rez1 = this.get('store').findAll('income');
      console.log('find all promise', rez1);

      // var rez2 = this.get('store').query('income', {stickerSymbol: 'MSFT'});
      // console.log(rez2);
    }
  }
});
