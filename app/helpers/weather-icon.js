import Ember from 'ember';

export function weatherIcon(params/*, hash*/) {
  var weather = params[0];

  if (weather = "Rain") {
    return Ember.String.htmlSave('span class=""><img src="/assets/img/rain.png" alt="rain-icon"></span>');
  } elseif (weather = "Cloudy") {
    return Ember.String.htmlSave('span class=""><img src="/assets/img/cloudy.png" alt="cloudy-icon"></span>');
  } else {
    return Ember.String.htmlSave('span class=""><img src="/assets/img/sunny.png" alt="sunny-icon"></span>');
  }

}

export default Ember.Helper.helper(weatherIcon);
