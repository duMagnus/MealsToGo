const placesLiveHost = "https://placesnearby-k67lbfn4la-uc.a.run.app";
const placesLocalHost =
  "https://43e5-181-192-80-36.ngrok.io/mealstogo-52743/us-central1/placesNearby";

const locationLiveHost = "https://geocode-k67lbfn4la-uc.a.run.app";
const locationLocalHost =
  "https://43e5-181-192-80-36.ngrok.io/mealstogo-52743/us-central1/geocode";

export const isDevelopment = process.env.NODE_ENV === "development";

export const placesHost = placesLiveHost;

export const locationHost = locationLiveHost;

// export const placesHost = isDevelopment ? placesLocalHost : placesLiveHost;

// export const locationHost = isDevelopment
//   ? locationLocalHost
//   : locationLiveHost;
