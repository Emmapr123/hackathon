const axios = require("axios");

export const getBudgetFormData = (emailAddress = 'sam.roth@ovoenergy.com', interval = 'month') => {
    const options = {
        method: "GET",
        url: `https://dev-hackathon-3oqmw6qtxq-nw.a.run.app/set?emailAddress=${emailAddress}&interval=${interval}`,
        params: {},
        headers: {},
      };
  return axios
    .request(options)
};


export const postInsightData = (emailAddress = 'sam.roth@ovoenergy.com', showerLengthMinutes, thermostatTemperatureC, washingTemperatureC) => {
    const options = {
        method: "POST",
        url: `https://dev-hackathon-3oqmw6qtxq-nw.a.run.app/set?emailAddress=${emailAddress}&showerLengthMinutes=${showerLengthMinutes}&thermostatTemperatureC=${thermostatTemperatureC}&washingTemperatureC=${washingTemperatureC}`,
        params: {},
        headers: {},
      };
  return axios
    .request(options)
};

export const getTrackData = (emailAddress = 'sam.roth@ovoenergy.com', interval = 'week') => {
    const options = {
        method: "GET",
        url: `https://dev-hackathon-3oqmw6qtxq-nw.a.run.app/track?emailAddress=${emailAddress}&interval=${emailAddress}`,
        params: {},
        headers: {},
      };
  return axios
    .request(options)
};


