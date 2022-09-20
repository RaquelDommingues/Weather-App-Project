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
    getForecast(response.data.coord);
  }
  
  function searchLocation(position) {
    let apiKey = "2ff29bed3181c3526c35cc5408037f85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  let currentLocationButton = document.querySelector("#Locate");
  currentLocationButton.addEventListener("click", getCurrentLocation);

function getForecast(coordinates) {
    let apiKey = "2ff29bed3181c3526c35cc5408037f85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayForecast)
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let minTemperatureElement = document.querySelector("#current-min");
    let maxTemperatureElement = document.querySelector("#current-max");
    let minTempLabelElement = document.querySelector("#current-min-temperature");
    let maxTempLabelElement = document.querySelector("#current-max-temperature");
    let unitsElement = document.querySelector("#now-units");
    let minUnitsElement = document.querySelector("#current-units-min");
    let maxUnitsElement = document.querySelector("#current-units-max");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#current-emoji");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    minTemperatureElement.innerHTML = Math.round(response.data.main.temp_min);
    maxTemperatureElement.innerHTML = Math.round(response.data.main.temp_max);
    minTempLabelElement.innerHTML = `Min`;
    maxTempLabelElement.innerHTML = `Max`;
    unitsElement.innerHTML = `ºC`;
    minUnitsElement.innerHTML = `ºC`;
    maxUnitsElement.innerHTML = `ºC`;
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    windElement.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} km/h`;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
    let apiKey = "2ff29bed3181c3526c35cc5408037f85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    getForecast(response.data.coord);
}
///////////////////////////////////////////////////

//Search for a City
function search(city) {
    let apiKey = "2ff29bed3181c3526c35cc5408037f85";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
    axios.get(apiUrl).then(displayDate);
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

//Forecast

function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}


function displayForecast(response) {
    let forecast = response.data.daily;
    let forecastElement = document.querySelector("#forecast");

    let forecastHTML = `<div class="row">`;

    forecast.forEach(function(forecastDay, index) {
        if (index < 6) {

        forecastHTML = forecastHTML +
        `
        <div class="col-2">
            <div class="weather-forescast-date">${formatDay(forecastDay.dt)}</div>
            <img 
                src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" 
                alt=""
                width="80"
            />
            <div class="weather-forescast-temps">
                <div class="max">
                    <mark id="max1">
                        ${Math.round(forecastDay.temp.max)}
                        <sup id="now-units">
                            <span class="forecast-units">ºC</span>
                        </sup>
                    </mark>
                </div>
                <div class="min">
                    <mark id="min1">
                        ${Math.round(forecastDay.temp.min)}
                        <sup id="now-units">
                            <span class="forecast-units">ºC</span>
                        </sup>
                    </mark>
                </div>
            </div>
        </div>
    `;
        }
    });

    forecastHTML = forecastHTML + `
</div>
    `;
    forecastElement.innerHTML = forecastHTML;
}