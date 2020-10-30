const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ab15cc2abc82aa9834b1e63964b339fe&query=37.8267,-122.4233';

request({ url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});