

function windChill(temperature, windSpeed){                 /* need to define temp and windspeed, try debugging again*/

   let temperature = parseFloat(document.getElementById("temperature").innerHTML);
   let windSpeed = parseFloat(document.getElementById("windSpeed").innerHTML);
   
   if (temperature <= 50 && windSpeed >= 3) {
      f= 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
      return f;
   }
   else{
      return "N/A";
   }
}
   document.getElementById("windChill").innerHTML = windChill();


