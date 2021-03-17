//preston id: 5604473
//my appid: 0bc9f4baea7b9d07d7e6fa8b23b2f5f6

 //add API weather for weather summary box
 const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=0bc9f4baea7b9d07d7e6fa8b23b2f5f6";

 fetch(apiURL)
 .then((response) => response.json())
 .then((jsObject) => {
   console.log(jsObject);
   
    document.getElementById('current-temperature').innerHTML = Math.round(jsObject.main.temp);        //get current temp
    document.getElementById('temperature').innerHTML = Math.round(jsObject.main.temp_max);            //get high temp
    document.getElementById('low-temperature').innerHTML = Math.round(jsObject.main.temp_min);        //get low temp
    document.getElementById('humidity').innerHTML = Math.round(jsObject.main.humidity);               //get humidity %
    document.getElementById('windSpeed').innerHTML = Math.round(jsObject.wind.speed);                 //get wind speed


  //add windchill function
    let temperature = parseFloat(document.getElementById("temperature").innerHTML);
    let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
   let windchill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));


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
.then((response) =>response.json())
.then((jsObject) => {
  

  let i = 0;
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];                //set days of the week
  const forecast = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));         //filter to specific time of day

  forecast.forEach(x => {
    

      let f = new Date(x.dt_txt);
      
      document.getElementById(`dayofweek${i+1}`).textContent = daysOfWeek[f.getDay()];           //get day of the week and display on page
      document.getElementById(`temperature${i+1}`).textContent = Math.round(x.main.temp);     //get temp and display as whole number
     

      let source = 'https://openweathermap.org/img/w/' + x.weather[0].icon + '.png';        //define image source
      let description = x.weather[0].description;                                               //define image alt text

      document.getElementById(`icon${i+1}`).setAttribute('src', source);                  //set weather icon to image source 
      document.getElementById(`icon${i+1}`).setAttribute('alt', description);                 //set alt text to icon

      i++;
  });

});
  
const townURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(townURL)
  .then(function (response) {       // .then returns a promise (proxy for unknown value) 
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" ) {       //select the town to be displayed
    
   
   let card = document.createElement('section');        // add html elements
   let event = document.createElement('p'); 
           
  
    
    card.textContent = towns[i].events;
    
  
    card.appendChild(event);
          

    document.querySelector('div.events').appendChild(card);

    
  }
}
  });
 
  


