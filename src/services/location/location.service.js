import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    // eslint-disable-next-line prettier/prettier
    `https://geocode-k67lbfn4la-uc.a.run.app?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
