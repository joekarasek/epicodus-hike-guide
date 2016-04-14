import Ember from 'ember';

export function tempConvert(params/*, hash*/) {
  var tempKelvin = params[0];
  var c = tempKelvin - 273.15;
  var f = c * 1.8 + 32;

  if (f > 65) {
    return Ember.String.htmlSafe('<span class="warm">'+f.toFixed(2) + '&deg' + '</span>');
  } else {
    return Ember.String.htmlSafe('<span class="cool">'+f.toFixed(2) + '&deg' + '</span>');
  }

}

export default Ember.Helper.helper(tempConvert);
