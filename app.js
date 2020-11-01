const geocode = require('./utils/geocode');


// const weatherUrl = 'http://api.weatherstack.com/current?access_key=ab15cc2abc82aa9834b1e63964b339fe&query=32.4968,-117.0178';

// request({ url: weatherUrl, json: true }, (error, response) => {
//   if(error){
//     console.log("Unable to connect to the weather service");
//   }else if(response.body.error){
//     console.log("Unable to find location");
//   }else{
//     let weather = response.body.current;
//     console.log(`It's currently ${weather.temperature} degrees out. There is a ${weather.precip}% chance of rain`);
//   }
// });

// const geoCodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2htYXJ0aW5leiIsImEiOiJja2d4OXdleWYwaHlmMnFwaWh3ZGNsNWRrIn0.HZ2GylbDeNC9w1PADQAk3w&limit=1';

// request({ url: geoCodeUrl, json: true }, (error, response) => {
//   if(error){
//     console.log("Unable to connect to the location service");
//   }else if(response.body.features.length === 0){
//     console.log("Unable to find location")
//   }else{
//     let latitude = response.body.features[0].center[1];
//     let longitude = response.body.features[0].center[0];
//     console.log("Latitude: ", latitude)
//   }
  
// });



geocode('Tijuana', (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});

