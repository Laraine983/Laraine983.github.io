function searchDogs(){
 
  const input = document.getElementById('dropdownID').value;
 const url = 'https://dog.ceo/api/breed/' + input + '/images/random/1';

fetch(url)
.then(function (response) {       // .then returns a promise (proxy for unknown value)
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       // temporary checking for valid response and data parsing
 
    const imgs = jsonObject['message'];
   
imgs.forEach(function(img) {
        let card = document.createElement('section');        // add html elements
        let p = document.createElement('p');
        let image = document.createElement('img');
               
        image.setAttribute('src', imgs[0]);              
        image.setAttribute('class', 'randomImage');
        p.setAttribute('class', 'info');
        card.setAttribute('class', 'dogCard');
 
         card.appendChild(p);
         card.appendChild(image);
      
  
        document.querySelector('div.results').appendChild(card);
  
});
  
});
 
}

   

/*
1) use local json for info about each dog
2) local storage??
3) modules
4) search function w/json
5) add audio element around buttons(?)
*/ 