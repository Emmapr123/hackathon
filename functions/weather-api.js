const axios = require("axios");

const options = {
  method: "GET",
  url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/minutely",
  params: { lat: "35.5", lon: "-78.5" },
  headers: {
    "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
    "X-RapidAPI-Key": "52af976b47msh5e3acc6d9ea5136p1277e1jsn482187bc7ff1",
  },
};

export const getWeatherForecast = async () => {
  return axios
    .request(options)
    .then(function (response) {
    //   console.log(response.data);
      return response.data
    })
    .catch(function (error) {
      console.error(error);
    });
};
