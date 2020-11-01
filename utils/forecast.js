const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=ab15cc2abc82aa9834b1e63964b339fe&query=' + latitude + ',' + longitude
  request({ url, json: true }, (error, response) => {
    if(error){
      callback("Unable to connect to the weather service", undefined)
    }else if(response.body.error){
      callback("Unable to find location. Try another search", undefined)
    }else{
      callback(undefined, {
        temperature: response.body.current.temperature,
        precipitation: response.body.current.precip
      });
    }
  });
};

module.exports = forecast;