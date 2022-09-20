//Locate me

let iconElement = document.querySelector("#current-emoji")
    iconElement.setAttribute("src", "");

function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#description").innerHTML = response.data.weather[0].description;
    document.querySelector("#wind").innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
    let iconElement = document.querySelector("#current-emoji")
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    let now = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[now.getDay()];
    let hours = now.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
        
    }
    let date = document.querySelector("#date");
    date.innerHTML = `${day} ${hours}:${minutes}`;
  }
  
  function searchLocation(position) {
    let apiKey = "759f279cf01ddb58633aa7aca9c28922";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  let currentLocationButton = document.querySelector("#Locate");
  currentLocationButton.addEventListener("click", getCurrentLocation);


function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description")
    let windElement = document.querySelector("#wind")
    let iconElement = document.querySelector("#current-emoji");
    celsiusTemperature = response.data.main.temp;
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description)
    let apiKey = "759f279cf01ddb58633aa7aca9c28922";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
}
///////////////////////////////////////////////////

//Search for a City
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
