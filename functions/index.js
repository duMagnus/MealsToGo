const { onRequest } = require("firebase-functions/v2/https");
const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");
const { defineString } = require("firebase-functions/params");

const { Client } = require("@googlemaps/google-maps-services-js");

const client = new Client({});

defineString("GOOGLE_MAPS_API_KEY");

exports.geocode = onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.placesNearby = onRequest((request, response) => {
  placesRequest(request, response, client);
});
