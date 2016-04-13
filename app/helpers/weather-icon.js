import Ember from 'ember';

export function weatherIcon(params/*, hash*/) {
  var weather = params[0];

  if (weather === "Rain") {
    return Ember.String.htmlSafe('<span><img src="/assets/img/rain.png" alt="rain-icon"></span>');
  } else if (weather === "Clouds") {
    return Ember.String.htmlSafe('<span><img src="/assets/img/cloudy.png" alt="cloudy-icon"></span>');
  } else {
    return Ember.String.htmlSafe('<span><img src="/assets/img/sunny.png" alt="sunny-icon"></span>');
  }

}

export default Ember.Helper.helper(weatherIcon);
