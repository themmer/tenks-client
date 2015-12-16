import Ember from 'ember';

export default Ember.Component.extend({
  keyValueMap: null,

  // This will need to be an array once done...

  grossMarginRatio: Ember.computed({
  	get() {
  		return 4.00;
  	}
  }),

  profitMarginRatio: Ember.computed({
  	get() {
  		return 5.00;
  	}
  }),

  accountsReceivableTurnover: Ember.computed({
  	get() {
  		return 15.40;
  	}
  }),

  daysSalesInAccountsReceivable: Ember.computed({
  	get() {
  		return 7.40;
  	}
  }),

  inventoryTurnover: Ember.computed({
  	get() {
  		return 14.40;
  	}
  }),

  daysSalesInInventory: Ember.computed({
  	get() {
  		return 2.40;
  	}
  })

});