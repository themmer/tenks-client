import Ember from 'ember';

export default Ember.Component.extend({
	keyValueMap: null,

	freeCashFlow: Ember.computed({
  	get() {
  		return 90000;
  	}
  }),
});
