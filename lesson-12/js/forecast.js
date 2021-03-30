
// API key: 0bc9f4baea7b9d07d7e6fa8b23b2f5f6


const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.2148&lon=-97.1331&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

fetch(apiURL)
.then((response) =>response.json())
.then((weather) => {

    console.log(weather);
const temperature = document.querySelector('#current-temperature');
const humidity = document.querySelector('#humidity');
const condition = document.querySelector('#condition');
const alerts = document.querySelector('#alerts');

temperature.textContent = Math.round(weather.current.temp);
humidity.textContent = weather.current.humidity;
condition.textContent = weather.current.weather[0].description;
alerts.textContent = weather.alerts.event;





});