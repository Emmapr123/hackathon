const axios = require("axios");

export const getSuccesfullLogin = (emailAddress, interval = "month") => {
  const options = {
    method: "GET",
    url: `https://dev-hackathon-3oqmw6qtxq-nw.a.run.app/login?emailAddress=${emailAddress}`,
    params: {},
    headers: {},
  };
  return axios.request(options);
};

export const getBudgetFormData = (
  emailAddress = "laura.marshall@hotmail.com",
  interval = "month"
) => {
  const options = {
    method: "GET",
    url: `https://dev-hackathon-3oqmw6qtxq-nw.a.run.app/set?emailAddress=${emailAddress}&interval=${interval}`,
    params: {},
    headers: {},
  };
  return axios.request(options);
};

export const postInsightData = (
  emailAddress = "laura.marshall@hotmail.com",
  showerLengthMinutes,
  thermostatTemperatureC,
  washingTemperatureC,
  total,
  interval = 'month'
) => {
  const options = {
    method: "POST",
    url: `https://dev-hackathon-3oqmw6qtxq-nw.a.run.app/set?emailAddress=${emailAddress}&showerLengthMinutes=${showerLengthMinutes}&thermostatTemperatureC=${thermostatTemperatureC}&washingTemperatureC=${washingTemperatureC}&total=${total}&interval=${interval}`,
    params: {},
    headers: {},
  };
  return axios.request(options);
};

export const getTrackData = (
  emailAddress = "laura.marshall@hotmail.com",
  interval = "week"
) => {
  const options = {
    method: "GET",
    url: `https://dev-hackathon-3oqmw6qtxq-nw.a.run.app/track?emailAddress=${emailAddress}&interval=${interval}`,
    params: {},
    headers: {},
  };
  return axios.request(options);
};
