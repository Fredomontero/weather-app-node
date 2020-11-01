const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const location = process.argv[2];
if(location){
  geocode(location, (error, { latitude, longitude } = {}) => {
    if(error){
      return console.log("Error: ", error);
    }
    forecast(latitude , longitude, (error, { temperature, precipitation }) => {
      if(error){
        return console.log("Error: ", error);
      }
      console.log(`The temperature in is ${temperature} and is ${precipitation}% chance to rain`);
    });
  });
}else{
  console.log("Please provide a location");
}


