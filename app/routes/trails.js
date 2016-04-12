import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // var url = "https://trailapi-trailapi.p.mashape.com/?lat=34.1&limit=25&lon=-105.2&q[activities_activity_type_name_eq]=hiking&radius=25";
    // return Ember.$.getJSON(url).header("X-Mashape-Key", "B5k9wMYIN1mshGQskDNQxcHnPhJmp1LoDvsjsn8IuL3NSxR6ic");
    return $.ajax({
        url: "https://trailapi-trailapi.p.mashape.com/?limit=25&q[activities_activity_type_name_eq]=hiking&q[state_cont]=Oregon",
        dataType: 'json',
        headers: {
          "X-Mashape-Key": "B5k9wMYIN1mshGQskDNQxcHnPhJmp1LoDvsjsn8IuL3NSxR6ic",
          // "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "application/json"
        }
      })
  }
});
