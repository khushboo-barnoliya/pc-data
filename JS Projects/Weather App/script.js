


const apiKey = "1ca71fcf5042dbfb1f2ac9627d1cebd8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".input");
const btn = document.querySelector(".button");

const chechWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector("#weather").style.display = "none";
  }
  else {
    var data = await response.json();
    console.log(data);

    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weatherIcon").setAttribute("src", "images/clouds.png");
    }
    else if (data.weather[0].main == "Clear") {
      document.querySelector(".weatherIcon").setAttribute("src", "images/clear.png");
    }
    else if (data.weather[0].main == "Mist") {
      document.querySelector(".weatherIcon").setAttribute("src", "images/mist.png");
    }
    else if (data.weather[0].main == "Rain") {
      document.querySelector(".weatherIcon").setAttribute("src", "images/mist.png");
    }
    else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weatherIcon").setAttribute("src", "images/mist.png");
    }
    document.querySelector("#weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }


}

btn.addEventListener('click', () => {
  if (input.value.length == 0) {
    alert("Please enter a city name");
  }
  chechWeather(input.value);
})


