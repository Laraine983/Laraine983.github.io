
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';     // URL to the JSON file 

fetch(requestURL)
  .then(function (response) {       // .then returns a promise (proxy for unknown value) 
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) { 
   
   let card = document.createElement('section');        // add html elements
   let h2 = document.createElement('h2');
   let p = document.createElement('p');
   let image = document.createElement('img'); 
   let birthDate = document.createElement('div');
   let birthPlace = document.createElement('div');          
   
  
   h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
   birthDate.textContent = 'Birth Date: ' + prophets[i].birthdate;
   birthPlace.textContent = 'Birth Place: ' + prophets[i].birthplace;
   image.setAttribute('src', prophets[i].imageurl);
   image.setAttribute('alt', prophets[i].name + ' ' +prophets[i].lastname + '-' + prophets[i].order);


    card.appendChild(h2);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(p);
    card.appendChild(image);
    

    document.querySelector('div.cards').appendChild(card);

    }
  });

  