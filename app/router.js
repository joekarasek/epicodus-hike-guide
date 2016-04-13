import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('weather');
  this.route('gmaps');
  this.route('trails');
  // TODO we might want to build a route to show more verbose info for each spot, including our nice google maps plug in
  // TODO clean out the gmaps and trails routes once we no longer need them
  // TODO we need an about page
});

export default Router;
