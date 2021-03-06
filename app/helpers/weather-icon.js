import Ember from 'ember';

export function weatherIcon(params/*, hash*/) {
  // Sets an icon for each tile related to the current weather description
  var place = params[0];
  if (place.weather.weather[0].main === "Rain" || place.weather.weather[0].main === "Drizzle" || place.weather.weather[0].main === "Snow") {
    return Ember.String.htmlSafe('<span><img src="/assets/img/rain.png" alt="rain-icon"></span>');
  } else if (place.weather.weather[0].main === "Clouds") {
    return Ember.String.htmlSafe('<span><img src="/assets/img/cloudy.png" alt="cloudy-icon"></span>');
  } else {
    return Ember.String.htmlSafe('<span><img src="/assets/img/sunny.png" alt="sunny-icon"></span>');
  }

}

export default Ember.Helper.helper(weatherIcon);
