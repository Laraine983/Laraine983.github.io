const directURL = "https://laraine983.github.io/lesson-12/json/directory.json";

fetch(directURL)
  .then(function (response) {       // .then returns a promise (proxy for unknown value) 
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       // temporary checking for valid response and data parsing

    const businesses = jsonObject['business'];
    for (let i = 0; i < businesses.length; i++) {
         
    
   
   let card = document.createElement('section');        // add html elements
   let phone = document.createElement('p'); 
   let website = document.createElement('p');
   let logo = document.createElement('p');
           
  
    
    
    phone.textContent = business[i].phone;
    website.textContent = business[i].website;
    logo.textContent = business[i].logo;
    
  
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(logo);
          

    document.querySelector('div.businesses').appendChild(card);

    
  }
}
  });