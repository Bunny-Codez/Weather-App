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
  console.log(data);
};

fetchData();
