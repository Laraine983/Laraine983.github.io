const directURL = "/lesson-12/json/directory.json";

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
   let event1 = document.createElement('p'); 
   let event2 = document.createElement('p');
   let event3 = document.createElement('p');
           
  
    
    
    event1.textContent = towns[i].events["0"];
    event2.textContent = towns[i].events["1"];
    event3.textContent = towns[i].events["2"];
    
  
    card.appendChild(event1);
    card.appendChild(event2);
    card.appendChild(event3);
          

    document.querySelector('div.events').appendChild(card);

    
  }
}
  });