import camelize from "camelize";
import { locationHost } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(
    // eslint-disable-next-line prettier/prettier
    `${locationHost}?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
