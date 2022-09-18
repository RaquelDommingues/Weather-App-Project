//Default page
function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  }
  
  function searchLocation(position) {
    let apiKey = "759f279cf01ddb58633aa7aca9c28922";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation(event) {
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

    window.onload = getCurrentLocation();

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description")
    let iconElement = document.querySelector("#current-emoji");
    let windElement = document.querySelector("#wind")
    celsiusTemperature = response.data.main.temp;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description)
    let apiKey = "759f279cf01ddb58633aa7aca9c28922";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
}

//City
function search(city) {
    let apiKey = "759f279cf01ddb58633aa7aca9c28922";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    axios.get(apiUrl).then(displayDate)
    axios.get(apiUrl).then(displayTemperature)
}
  
    function handleSubmit(event) {
        event.preventDefault();
        let cityInputElement = document.querySelector("#city-input");
        search(cityInputElement.value);
    }
  
    let form = document.querySelector("#searchBar");
    form.addEventListener("submit", handleSubmit);

//Date

function displayDate(response){

    let date = new Date();
    let offset = response.data.timezone * 1000;
    let utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    let newDate = new Date(utc + (offset));
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[newDate.getDay()];
    let hours = newDate.getHours();

    if (hours < 10) {
    hours = `0${hours}`;
    }
    let minutes = newDate.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes}`;
    }

    let time = document.querySelector("#date");

    time.innerHTML = `${day} ${hours}:${minutes}`;
}


//Unit conversion


function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    let fahrenheitTemperature = (celsiusTemperature*9)/5 + 32;
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
    event.preventDefault()
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement = Math.round(celsiusTemperature);
}


let celsiusTemperature = null;

let fahrenheitLink1 = document.querySelector("#fahrenheit-link1");
let fahrenheitLink2 = document.querySelector("#fahrenheit-link2");
let fahrenheitLink3 = document.querySelector("#fahrenheit-link3");
let fahrenheitLink4 = document.querySelector("#fahrenheit-link4");
let fahrenheitLink5 = document.querySelector("#fahrenheit-link5");
let fahrenheitLink6 = document.querySelector("#fahrenheit-link6");
let fahrenheitLink7 = document.querySelector("#fahrenheit-link7");
let fahrenheitLink8 = document.querySelector("#fahrenheit-link8");
let fahrenheitLink9 = document.querySelector("#fahrenheit-link9");
let fahrenheitLink10 = document.querySelector("#fahrenheit-link10");
let fahrenheitLink11 = document.querySelector("#fahrenheit-link11");
let fahrenheitLink12 = document.querySelector("#fahrenheit-link12");
let fahrenheitLink13 = document.querySelector("#fahrenheit-link13");
let fahrenheitLink14 = document.querySelector("#fahrenheit-link14");
let fahrenheitLink15 = document.querySelector("#fahrenheit-link15");


fahrenheitLink1.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink2.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink3.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink4.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink5.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink6.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink7.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink8.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink9.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink10.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink11.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink12.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink13.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink14.addEventListener("click", displayFahrenheitTemperature);
fahrenheitLink15.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink1 = document.querySelector("#celsius-link1");
let celsiusLink2 = document.querySelector("#celsius-link2");
let celsiusLink3 = document.querySelector("#celsius-link3");
let celsiusLink4 = document.querySelector("#celsius-link4");
let celsiusLink5 = document.querySelector("#celsius-link5");
let celsiusLink6 = document.querySelector("#celsius-link6");
let celsiusLink7 = document.querySelector("#celsius-link7");
let celsiusLink8 = document.querySelector("#celsius-link8");
let celsiusLink9 = document.querySelector("#celsius-link9");
let celsiusLink10 = document.querySelector("#celsius-link10");
let celsiusLink11 = document.querySelector("#celsius-link11");
let celsiusLink12 = document.querySelector("#celsius-link12");
let celsiusLink13 = document.querySelector("#celsius-link13");
let celsiusLink14 = document.querySelector("#celsius-link14");
let celsiusLink15 = document.querySelector("#celsius-link15");


celsiusLink1.addEventListener("click", displayCelsiusTemperature);
celsiusLink2.addEventListener("click", displayCelsiusTemperature);
celsiusLink3.addEventListener("click", displayCelsiusTemperature);
celsiusLink4.addEventListener("click", displayCelsiusTemperature);
celsiusLink5.addEventListener("click", displayCelsiusTemperature);
celsiusLink6.addEventListener("click", displayCelsiusTemperature);
celsiusLink7.addEventListener("click", displayCelsiusTemperature);
celsiusLink8.addEventListener("click", displayCelsiusTemperature);
celsiusLink9.addEventListener("click", displayCelsiusTemperature);
celsiusLink10.addEventListener("click", displayCelsiusTemperature);
celsiusLink11.addEventListener("click", displayCelsiusTemperature);
celsiusLink12.addEventListener("click", displayCelsiusTemperature);
celsiusLink13.addEventListener("click", displayCelsiusTemperature);
celsiusLink14.addEventListener("click", displayCelsiusTemperature);
celsiusLink15.addEventListener("click", displayCelsiusTemperature);