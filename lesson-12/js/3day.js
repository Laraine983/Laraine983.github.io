


// API key: 0bc9f4baea7b9d07d7e6fa8b23b2f5f6


const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.2148&lon=-97.1331&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

fetch(forecastURL)
.then((response) =>response.json())
.then((forecast) => {

console.log(forecast);

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

const today = new Date()
const tomorrow = new Date(today)


let card = document.createElement("section");
let day1 = document.createElement("p");
let temp = document.createElement("p");
let day2 = document.createElement("p");
let day3 = document.createElement("p");


day1.textContent = 'April' +  (tomorrow.getDate() + 1);
day2.textContent = 'April' + (tomorrow.getDate() + 2);
day3.textContent = 'April' + (tomorrow.getDate() + 3);
temp.textContent = forecast.current.temp;

card.appendChild(day1);
card.appendChild(day2);
card.appendChild(day3);
card.appendChild(temp);

document.querySelector('div.forecast').appendChild(card);
  
});