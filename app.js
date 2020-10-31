const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ab15cc2abc82aa9834b1e63964b339fe&query=32.4968,-117.0178';

request({ url, json: true }, (error, response) => {
  let weather = response.body.current;
  console.log(`It's currently ${weather.temperature} degrees out. There is a ${weather.precip}% chance of rain`);
});