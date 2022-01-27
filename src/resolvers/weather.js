const axios = require("axios");

const weather = async (parent, args, context, info) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${args.cityName}&appid=393609ac7b2e5f25ccdd00e626ee13dd`;
  const { data } = await axios.get(url);

  console.log({
    id: data.id,
    cityName: args.cityName,
    visibility: data.visibility,
    iconUrl: data.weather[0].icon,
    description: data.weather[0].description,

    statistics: {
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      windDeg: data.wind.deg,
    },
  });

  return {
    id: data.id,
    cityName: args.cityName,
    visibility: data.visibility,
    iconUrl: data.weather[0].icon,
    description: data.weather[0].description,

    statistics: {
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      windDeg: data.wind.deg,
    },
  };
};

module.exports = weather;
