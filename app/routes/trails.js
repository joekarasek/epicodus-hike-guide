import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var trailKey = config.trailApiKey;
    return $.ajax({
      url: "https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Portland&q[state_cont]=Oregon&radius=100",
      dataType: 'json',
      headers: {
        "X-Mashape-Key": trailKey,
        "Accept": "application/json"
      }
    });
    // .then(function(result) {
    //   var weatherKey = config.weatherApiKey;
    //
    //   var promiseArray = [];
    //
    //   result.places.forEach(function(place, index) {
    //
    //     // Starts sending out API calls
    //     promiseArray.push($.get('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139' + '&appid=0bc1f375eec970019c6d88bce9494c4c', function(response) {
    //       result.places[index].temp = response.main.temp;
    //     }));
    //
    //   });
    //
    //   // debugger;
    //   return Promise.all(promiseArray).then(function(values) {
    //     // console.log(promiseArray);
    //     // console.log(result);
    //     console.log(values);
    //     return result;
    //   });
    //
    //   // returns result before the weather api calls come back...
    // });
  }
});
