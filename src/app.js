function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
}

let apiKey = "a5dd247415f25bfa34422eabd0fe171e";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

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