const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('Tijuana', (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});

forecast(32.4968, -117.0178, (error, data) => {
  console.log("Error: ", error);
  console.log("Data: ", data);
});

