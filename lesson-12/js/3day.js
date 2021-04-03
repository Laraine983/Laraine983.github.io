


// My API key: 0bc9f4baea7b9d07d7e6fa8b23b2f5f6


const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.2148&lon=-97.1331&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

fetch(forecastURL)
.then((response) =>response.json())
.then((forecast) => {

console.log(forecast);



const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const nextDay = new Date(today);
nextDay.setDate(nextDay.getDate() + 2);


const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

  document.getElementById("dayofweek1").innerHTML =  dayOfWeek[today.getDay()+1];
  document.getElementById("temperature1").innerHTML = forecast.daily[0].temp.day;
  document.getElementById("icon1").setAttribute('src','https://openweathermap.org/img/w/' + forecast.current.weather[0].icon + '.png');


 
  document.getElementById("dayofweek2").innerHTML = dayOfWeek[nextDay.getDay()];
  document.getElementById("temperature2").innerHTML = forecast.daily[1].temp.day;
  document.getElementById("icon2").setAttribute('src','https://openweathermap.org/img/w/' + forecast.current.weather[0].icon + '.png');



  document.getElementById("dayofweek3").innerHTML = dayOfWeek[nextDay.getDay()+1];
  document.getElementById("temperature3").innerHTML = forecast.daily[2].temp.day;
  document.getElementById("icon3").setAttribute('src','https://openweathermap.org/img/w/' + forecast.current.weather[0].icon + '.png');
});



/*const today = new Date();
const tomorrow = new Date(today);
let day1 = tomorrow.setDate(tomorrow.getDate() + 1);
let i=0;

forecast.forEach(x => {

const date1=document.querySelector('#dayofweek1');
const temperature1 = document.querySelector('#temperature1');
const temperature2 = document.querySelector('#temperature2');



date1.textContent = day1;
temperature1.textContent = forecast.current.temp;
temperature2.textContent = Math.round(forecast.current.temp);
alerts.textContent = forecast.alerts;

*/


//const today = new Date();
//const tomorrow = new Date(today);
//let nextDay = tomorrow.setDate(tomorrow.getDate() + 1);