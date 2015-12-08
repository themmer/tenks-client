import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/'}, function() {
    this.route('home/income');
    this.route('home/cashFlow');
    this.route('home/balanceSheet');
  });
});

export default Router;
