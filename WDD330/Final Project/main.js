
function searchDogs(){
 
  const input = document.getElementById('dropdownID').value;
 const url = 'https://dog.ceo/api/breed/' + input + '/images/random/1';

fetch(url)
.then(function (response) {       // .then returns a promise (proxy for unknown value)
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       
 
    const imgs = jsonObject['message'];
   const deleteOne = document.querySelector('div.results');
   for (i = 0; i < imgs.length; i++) {

        let card = document.createElement('section');        
        let image = document.createElement('img');
        let button = document.createElement('button');
        let x = document.createTextNode("X");
               
        card.setAttribute('class', 'dogCard');
        image.setAttribute('src', imgs[0]);              
        image.setAttribute('class', 'randomImage');
        button.setAttribute('class', 'deleteItem');
        button.appendChild(x);  

       
         card.appendChild(image);
         card.appendChild(button);
       document.querySelector('div.results').appendChild(card);
  




//JSON - figure out how to have info set for each card, not change each time you add new dog
fetch('./info.json')
  .then(function (response) {       
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);      

    const dogs = jsonObject['dogs'];
    for(let i = 0; i < dogs.length; i++ ) { 

   if(input === dogs[i].breed){ //this grabs whatever input currently is and is changing info to match that...need it to add instead
      
   let breed = document.querySelector('h2.breedName');
   breed.textContent = dogs[i].breed;
   
    let weight = document.querySelector('p.weight');
    weight.textContent = dogs[i].weight;


 
    }
 
  }
  });






//delete btn
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