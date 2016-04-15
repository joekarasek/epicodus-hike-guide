import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var trailKey = config.trailApi;

    return $.ajax({
      url:"https://trailapi-trailapi.p.mashape.com/?lat=45.5231&lon=-122.6765&limit=63&q[activities_activity_type_name_eq]=hiking&radius=50",
      dataType: 'json',
      headers: {
        "X-Mashape-Key": trailKey,
        "Accept": "application/json"
      }
    })
    .then(function(result) {
      // This function makes a series of API calls for weather info, pushes the promises into an array, and returns the promises as a bundle to ember. Each promise adds data to result as they resolve.
      var promiseArray = [];
      var weatherKey = config.weatherApi;
      result.places.forEach(function(place, index) {
        promiseArray.push($.get('http://api.openweathermap.org/data/2.5/weather?lat='+ place.lat +'&lon=' + place.lon + '&appid=' + weatherKey, function(response) {
          // Add code here to write weather data to the result (hikes) json
          // TODO we need to decide what weather data to pull in beyond the temperature (or just grab it all)
          result.places[index].weather = response;
        }));
      });
      return Promise.all(promiseArray).then(function(values) {
        // These console logs allow you to see the jsons returned from the the API calls
        // console.log(promiseArray);
        console.log(result);
        return result;
      });
    });
  },

});
