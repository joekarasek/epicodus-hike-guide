import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.ajax({
        url: "https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[city_cont]=Portland&q[state_cont]=Oregon&radius=100",
        dataType: 'json',
        headers: {
          "X-Mashape-Key": "B5k9wMYIN1mshGQskDNQxcHnPhJmp1LoDvsjsn8IuL3NSxR6ic",
          "Accept": "application/json"
        }
      })
  }
});
