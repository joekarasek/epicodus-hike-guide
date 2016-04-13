import Ember from 'ember';

export function distance(params/*, hash*/) {
  var lat1 = params[0]
  var lon1 = params[1]
  var lat2 = 45.5231
  var lon2 = -122.6765
  var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
  return dist.toFixed(1);
}

export default Ember.Helper.helper(distance);
