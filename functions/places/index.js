const { mocks, addMockImage } = require("./mock");

const addGoogleImage = (restaurant) => {
  if (restaurant.hasOwnProperty("photos")) {
    const ref = restaurant.photos[0].photo_reference;
    if (ref) {
      restaurant.photos = [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${process.env.GOOGLE_MAPS_API_KEY}`,
      ];
      return restaurant;
    }
  }

  restaurant.photos = [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ];
  return restaurant;
};

module.exports.placesRequest = (request, response, client) => {
  const { location, mock } = request.query;

  if (mock === "true") {
    const data = mocks[location];
    if (data) {
      data.results = data.results.map(addMockImage);
      return response.json(data);
    }
  }

  client
    .placesNearby({
      params: {
        location: location,
        radius: 15000,
        type: "restaurant",
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 100000,
    })
    .then((res) => {
      console.log(location);
      res.data.results = res.data.results.map(addGoogleImage);
      // res.data.results = res.data.results.map(addMockImage);
      return response.json(res.data);
    })
    .catch((e) => {
      response.status(400);
      console.log("error: ", e);
      response.send(e);
    });
};
