import Ember from 'ember';

export default Ember.Component.extend({
	keyValueMap: null,

	workingCapital: Ember.computed({
  	get() {
  		return 4.00;
  	}
  }),

  currentRatio: Ember.computed({
  	get() {
  		return 5.00;
  	}
  }),

  quickRatio: Ember.computed({
  	get() {
  		return 15.40;
  	}
  })
});
