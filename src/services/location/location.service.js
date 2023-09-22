import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    // eslint-disable-next-line prettier/prettier
    `https://5c06-181-192-80-36.ngrok.io/mealstogo-52743/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
