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
