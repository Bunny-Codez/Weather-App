const searchBox = document.querySelector("#searchbar");
const searchButton = document.querySelector("#searchbutton");

const weatherIcon = document.querySelector("#weather");

const fetchData = async () => {
  try {
    const responce = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=f38611ba8e07ee5d8eb2719988814b5a&units=metric" +
        "&appid=${apiKey}"
    );
    var data = await responce.json();
  } catch (err) {
    console.log(err);
  }
  document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "imgs/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "imgs/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "imgs/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "imgs/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "imgs/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "imgs/snow.png";
  }
};

const getCityWeather = async (city) => {
  console.log(city);
  try {
    const responce = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f38611ba8e07ee5d8eb2719988814b5a&units=metric` +
        "&appid=${apiKey}"
    );
    var data = await responce.json();
  } catch (err) {
    console.log(err);
  }
  document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clear") {
    weatherIcon.src = "imgs/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "imgs/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "imgs/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "imgs/mist.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "imgs/rain.png";
  } else if (data.weather[0].main == "Snow") {
    weatherIcon.src = "imgs/snow.png";
  } else if (data.weather[0].main == "Haze") {
    weatherIcon.src = "imgs/haze.png";
  }
};

searchButton.addEventListener("click", () => getCityWeather(searchBox.value));

fetchData();
