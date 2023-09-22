import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    // eslint-disable-next-line prettier/prettier
    `https://5c06-181-192-80-36.ngrok.io/mealstogo-52743/us-central1/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedRestults = camelize(results).map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.businessStatus === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.openingHours && restaurant.openingHours.open_now,
    };
  });
  return mappedRestults;
};
