//! Init local storage
const storage = new Storage();

//!Get stored location data
const weatherLocation = storage.getLocationData();

// !INIT WEATHER OBJECT
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//! INIT UI
const ui = new UI();

// * Get weather on dom load
document.addEventListener("DOMContentLoaded", getWeather());

//! Change location event
document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;

  // ?Change location
  weather.changeLocation(city, country);

  //   ? Set  location in local storage
  storage.setLocationData(city, country);

  //? get and display weather
  getWeather();

  //TODO close modal
  $("#locModal").modal("hide");
});

// ?Change location
// weather.changeLocation("london", "uk");

// TODO this function should be called when the dom loads
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      //UI display
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
