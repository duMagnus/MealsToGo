import camelize from "camelize";
import { locationHost, isMock } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(
    // eslint-disable-next-line prettier/prettier
    `${locationHost}?city=${searchTerm}&mock=${isMock}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      throw new Error(e);
    });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
