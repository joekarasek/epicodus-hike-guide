import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.ajax({
      url: "https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Portland&q[state_cont]=Oregon&radius=50",
      dataType: 'json',
      headers: {
        "X-Mashape-Key": "B5k9wMYIN1mshGQskDNQxcHnPhJmp1LoDvsjsn8IuL3NSxR6ic",
        "Accept": "application/json"
      }
    })
    .then(function(result) {
      // This function makes a series of API calls for weather info, pushes the promises into an array, and returns the promises as a bundle to ember. Each promise adds data to result as they resolve.
      var promiseArray = [];
      result.places.forEach(function(place, index) {
        promiseArray.push($.get('http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139' + '&appid=0bc1f375eec970019c6d88bce9494c4c', function(response) {
          result.places[index].temp = response.main.temp;
          result.places[index].icon = response.weather.main;
        }));
      });
      return Promise.all(promiseArray).then(function(values) {
        // These console logs allow you to see the jsons returned from the the API calls
        console.log(promiseArray);
        // console.log(result);
        return result;
      });
    });
  }
});
