import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    // eslint-disable-next-line prettier/prettier
    `https://placesnearby-k67lbfn4la-uc.a.run.app?location=${location}`
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
