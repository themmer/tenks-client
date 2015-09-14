import Ember from 'ember';

export default Ember.Component.extend({
  keyValueMap: null,
  keyValueMapSize: function() {
    return this.get('keyValueMap').length;
  }
});
