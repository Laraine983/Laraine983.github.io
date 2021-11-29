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
   const status = jsonObject['status'];
   const deleteOne = document.querySelector('div.results');
   for (i = 0; i < imgs.length; i++) {

        let card = document.createElement('section');        // add html elements
        let p = document.createElement('p');
        let image = document.createElement('img');
        let button = document.createElement('button');
        let x = document.createTextNode("X");
               
        image.setAttribute('src', imgs[0]);              
        image.setAttribute('class', 'randomImage');
        p.setAttribute('class', 'info');
        card.setAttribute('class', 'dogCard');
        button.setAttribute('class', 'deleteItem');
        button.appendChild(x);  

         card.appendChild(p);
         card.appendChild(image);
         card.appendChild(button);
      
  
        document.querySelector('div.results').appendChild(card);
  
        

        deleteOne.addEventListener('click', (e) => {
          if (e.target.classList.contains('deleteItem') === true) {
            e.target.parentElement.remove();
            }
        }); 
};
  
});
 
}



/*
1) use local json for info about each dog
2) local storage??
3) modules
4) search function w/json
5) add audio element around buttons(?)
*/ 