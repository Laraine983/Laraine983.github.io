//preston id: 5604473
//my appid: 0bc9f4baea7b9d07d7e6fa8b23b2f5f6

 //add API weather for weather summary box
 const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

 fetch(apiURL)
 .then((response) => response.json())
 .then((jsObject) => {
   console.log(jsObject);
   
    document.getElementById('current-temperature').innerHTML = jsObject.main.temp; //get current temp
    document.getElementById('temperature').innerHTML = jsObject.main.temp_max;  //get high temp
    document.getElementById('low-temperature').innerHTML = jsObject.main.temp_min; //get low temp
    document.getElementById('humidity').innerHTML = jsObject.main.humidity; //get humidity %
    document.getElementById('windSpeed').innerHTML = jsObject.wind.speed; //get wind speed


  
    let temperature = parseFloat(document.getElementById("temperature").innerHTML);
    let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
   let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * temperature * Math.pow(windSpeed, .16));


   if (temperature <= 50 && windSpeed >= 3) {
      windchill = Math.round(windchill);
   }
   else{
      windchill= "N/A";
   }

   document.getElementById("windChill").innerHTML = windchill;
 });



 //add API forecast for 5 day forecast
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
//Go through the forecast.list entries and determine with a selection structure if the dt_txt 
//field contains (includes) the string '18:00:00' to get your five forecasts.

  });
