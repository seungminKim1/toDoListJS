const weather = document.querySelector(".jsWeather");

const COORD_LS = "coord",
  API_KEY = "0249f88982c3a9c655b5b3857bf6d825";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const location = json.name;
      weather.innerText = `${temp} @${location}`;
    });
}

function saveCoord(obj) {
  localStorage.setItem(COORD_LS, JSON.stringify(obj));
}

function succesGetPosition(event) {
  const latitude = event.coords.latitude;
  const longitude = event.coords.longitude;
  const coordObj = {
    latitude,
    longitude,
  };
  saveCoord(coordObj);
  getWeather(latitude, longitude);
}

function failGetPosition() {
  console.log("Cant access geo location");
}

function askCoord() {
  navigator.geolocation.getCurrentPosition(succesGetPosition, failGetPosition);
}

function loadCoord() {
  const loadedCoord = localStorage.getItem(COORD_LS);
  if (loadedCoord === null) {
    askCoord();
  } else {
    const parsedCoord = JSON.parse(loadedCoord);
    getWeather(parsedCoord.latitude, parsedCoord.longitude);
  }
}

function init() {
  loadCoord();
}

init();
