function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let iconElement = document.querySelector("#current-emoji");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description)
}

let apiKey = "a5dd247415f25bfa34422eabd0fe171e";
let city = "New York"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

console.log(apiUrl)

axios.get(apiUrl).then(displayTemperature)

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

axios.get(apiUrl).then(displayDate)