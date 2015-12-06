import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  	// Need to fetch text and help text before transitioning to route
		var metadataPromise = this.store.query('metadata', {lang: 'en-US'});
		return metadataPromise.then((result) => {
			console.log('result of metadata', result);
			return result.content[0]._data;
		});
  }
});
