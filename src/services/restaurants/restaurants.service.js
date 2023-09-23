import camelize from "camelize";
import { isMock, placesHost } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(
    // eslint-disable-next-line prettier/prettier
    `${placesHost}?location=${location}&mock=${isMock}`
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
