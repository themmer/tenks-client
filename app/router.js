import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'}, function() {
    this.route('rest/income');
    this.route('rest/cashFlow');
    this.route('rest/balanceSheet');
  });
});

export default Router;
