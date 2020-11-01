const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2htYXJ0aW5leiIsImEiOiJja2d4OXdleWYwaHlmMnFwaWh3ZGNsNWRrIn0.HZ2GylbDeNC9w1PADQAk3w&limit=1'
  request({ url, json: true }, (error, response) => {
    if(error){
      callback("Unable to connect to the location service", undefined)
    }else if(response.body.features.length === 0){
      callback("Unable to find location. Try another search", undefined)
    }else{
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        logitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  });
};

module.exports = geocode;