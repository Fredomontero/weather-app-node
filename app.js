const request = require('request');

const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2htYXJ0aW5leiIsImEiOiJja2d4OXdleWYwaHlmMnFwaWh3ZGNsNWRrIn0.HZ2GylbDeNC9w1PADQAk3w&limit=1';

request({ url: geoCodeUrl, json: true }, (error, response) => {
  let latitude = response.body.features[0].center[1];
  let longitude = response.body.features[0].center[0];
  // console.log(`The coordinate of LA are:  ${coordinates}`);
  console.log(latitude, longitude);
});

const weatherUrl = 'http://api.weatherstack.com/current?access_key=ab15cc2abc82aa9834b1e63964b339fe&query=32.4968,-117.0178';

request({ url: weatherUrl, json: true }, (error, response) => {
  let weather = response.body.current;
  console.log(`It's currently ${weather.temperature} degrees out. There is a ${weather.precip}% chance of rain`);
});