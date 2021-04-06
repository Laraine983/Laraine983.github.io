


// My API key: 0bc9f4baea7b9d07d7e6fa8b23b2f5f6


//const forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.2148&lon=-97.1331&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

fetch(forecastURL)
.then((response) =>response.json())
.then((forecast) => {

console.log(forecast);



let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
let nextDay = new Date(today);
nextDay.setDate(nextDay.getDate() + 2);


let dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

  document.getElementById("dayofweek1").innerHTML =  dayOfWeek[tomorrow.getDay()];
  document.getElementById("temperature1").innerHTML = Math.round(forecast.daily[0].temp.day);
  document.getElementById("icon1").setAttribute('src','https://openweathermap.org/img/w/' + forecast.current.weather[0].icon + '.png');


 
  document.getElementById("dayofweek2").innerHTML = dayOfWeek[nextDay.getDay()];
  document.getElementById("temperature2").innerHTML = Math.round(forecast.daily[1].temp.day);
  document.getElementById("icon2").setAttribute('src','https://openweathermap.org/img/w/' + forecast.current.weather[0].icon + '.png');



  document.getElementById("dayofweek3").innerHTML = dayOfWeek[nextDay.getDay()+1];
  document.getElementById("temperature3").innerHTML = Math.round(forecast.daily[2].temp.day);
  document.getElementById("icon3").setAttribute('src','https://openweathermap.org/img/w/' + forecast.current.weather[0].icon + '.png');

  document.getElementById("banner").innerHTML =  forecast.alerts[0].description;
  document.getElementById("banner").style.display = "block";
});


function closeBox() {
  document.getElementById('close').style.display='none';
  
  document.getElementById('banner').style.display='none';
}