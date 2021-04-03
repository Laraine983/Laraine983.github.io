
// API key: 0bc9f4baea7b9d07d7e6fa8b23b2f5f6


const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.2148&lon=-97.1331&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

fetch(apiURL)
.then((response) =>response.json())
.then((jsObject) => {

const temperature = document.querySelector('#current-temperature');
const humidity = document.querySelector('#humidity');
const condition = document.querySelector('#condition');


temperature.textContent = Math.round(jsObject.current.temp);
humidity.textContent = jsObject.current.humidity;
condition.textContent = jsObject.current.weather[0].description;







});



