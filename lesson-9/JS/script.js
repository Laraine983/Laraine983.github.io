function toggleMenu(){
  console.log(document.getElementById("primaryNav").classList);
  document.getElementById("primaryNav").classList.toggle("hide");
}



    
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';     // URL to the JSON file 

fetch(requestURL)
  .then(function (response) {       // .then returns a promise (proxy for unknown value) 
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {  //select the 3 towns to be displayed
    
   
   let card = document.createElement('section');        // add html elements
   let name = document.createElement('h2');
   let motto = document.createElement('p'); 
   let yearFounded = document.createElement('p');
   let currentPopulation = document.createElement('p'); 
   let averageRainfall = document.createElement('p');
   let photo = document.createElement('img');         
  
    name.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
    currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
    averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
    photo.setAttribute('src', "Images/" + towns[i].photo);
    photo.setAttribute('alt', "Photo of the town of " + towns[i].name);
    
    card.appendChild(name);
    card.appendChild(motto);
    card.appendChild(yearFounded);
    card.appendChild(currentPopulation);
    card.appendChild(averageRainfall);
    card.appendChild(photo);       

    document.querySelector('div.cards').appendChild(card);

    
  }
}
  });