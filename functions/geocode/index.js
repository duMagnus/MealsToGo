const { locations: locationsMock } = require("./geocode.mock");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = request.query;

  if (mock === "true") {
    const locationMock = locationsMock[city.toLowerCase()];
    return response.json(locationMock);
  }

  client
    .geocode({
      params: {
        address: city,
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000,
    })
    .then((res) => {
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      console.log(e);
      response.send(e);
    });
};
