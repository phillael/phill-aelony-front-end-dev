export const mapSnippet = `window.addEventListener("DOMContentLoaded", (event) => {
  initMap();
});

function initMap() {
  map = L.map("mapid").setView([37.4223, -122.085], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  document.getElementById("search-btn").addEventListener("click", search);
}`;

export const locationSnippet = `function Location({ ipAddress, city, state, zip, timezone, isp, lat, lng }) {
  this.ipAddress = ipAddress;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.timezone = timezone;
  this.isp = isp;
  this.lat = lat;
  this.lng = lng;

  return this;
}

Location.prototype.locationString = function () {
  return this.city + ", " + this.state + " " + this.zip;
};

Location.prototype.fromJson = function (json) {
  return new Location({
    ipAddress: json.ip,
    lat: json.location.lat,
    lng: json.location.lng,
    city: json.location.city,
    state: json.location.region,
    zip: json.location.postalCode,
    timezone: json.location.timezone,
    isp: json.isp,
  });
};

Location.prototype.addMarker = function (map) {
  map.setView([this.lat, this.lng], 13);
  marker = L.marker([this.lat, this.lng])
    .addTo(map)
    .bindPopup(this.locationString())
    .openPopup();
};
        `;

export const fetchSnippet = `async function search(e) {
  e.preventDefault();

  var search = document.getElementById("search-box").value;
  var searchType = isNaN(search.charAt(0)) ? "domain" : "ipAddress";

  const response = await fetch(
    https://geo.ipify.org/api/v1?apiKey=at_9D8P3lEDDsadaOf2pRmugRsVKQoMS4Wf&$searchType=$search
  );

  const json = await response.json();

  place = new Location({}).fromJson(json);
  if (marker) map.removeLayer(marker);
  place.addMarker(map);

  displayResults();
  // fetch(
  //   https://geo.ipify.org/api/v1?apiKey=at_asff3lEdeaccpRmugRsVKQoMS4Wf&$searchType=$search
  // )
  //   .then((response) => response.json())
  //   .then((json) => {
  //     place = new Location({}).fromJson(json);
  //     if (marker) map.removeLayer(marker);
  //     place.addMarker(map);

  //     displayResults();
  //   });
}`;
