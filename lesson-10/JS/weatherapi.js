
const apiURL =  "api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid={0bc9f4baea7b9d07d7e6fa8b23b2f5f6}";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });