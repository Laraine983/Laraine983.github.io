
 
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

