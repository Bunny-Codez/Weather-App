const searchBox = document.querySelector("#searchbar");
const searchButton = document.querySelector("#searchbutton");

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
};

searchButton.addEventListener("click", () => getCityWeather(searchBox.value))

// fetchData();
