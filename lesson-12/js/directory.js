const directURL = "https://laraine983.github.io/lesson-12/json/directory.json";      //connect to my JSON file

fetch(directURL)
  .then(function (response) {      
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       

    const business = jsonObject['business'];
    for (let i = 0; i < business.length; i++) {
         
    
   
   let card = document.createElement('section');        
   let name = document.createElement('p');          //pull business name
   let phone = document.createElement('p');         //pull business phone number
   let website = document.createElement('p');       //pull website link
   let logo = document.createElement('p');          //pull logo (if available)
           
  
    
    name.textContent = business[i].name;
    phone.textContent = business[i].phone;
    website.textContent = business[i].website;
    logo.textContent = business[i].logo;
    
  
    card.appendChild(name);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(logo);
          

    document.querySelector('div.businesses').appendChild(card);

    
  }
});
 