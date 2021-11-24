//cat api api key: fe962b92-42b3-407d-a606-5ef01fc37aa7
//petfinder api key: xwPTzdBO8s90UmgqV0AkJ83ieYQfjSSFc41SLWmouxNOqfUcxr
//petfinder secret: DEKXDEjqwstYy5MHM3UEPE98MzGjrHpxEI3q03sJ




//works, but adds search images to current page instead of starting new page

//const url= "https://dog.ceo/api/breed/corgi/images/random/6";
/*
function search(){
 
  const input = document.getElementById('dropdownID').value;
 const url = 'https://dog.ceo/api/breed/' + input + '/images/random/6';

fetch(url)
.then(function (response) {       // .then returns a promise (proxy for unknown value)
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       // temporary checking for valid response and data parsing
 
    const img = jsonObject['message'];
    
    for (let i = 0; i < img.length; i++ ) {
   
        let card = document.createElement('section');        // add html elements
        let p = document.createElement('p');
        let image = document.createElement('img');
               
        image.setAttribute('src', img[i]);              
        image.setAttribute('class', 'randomImage');
        p.setAttribute('class', 'info');
        card.setAttribute('class', 'dogCard');
 
         card.appendChild(p);
         card.appendChild(image);
      
     
        document.querySelector('div.results').appendChild(card);
      
     //location.reload();

    }
   
  });
  
}
*/

  /*
  function loadUrl() {
    location.href = 'https://dog.ceo/api/breed/' + document.getElementById('dropdownID').value + '/images/random/6';

  fetch(url);
    }
*/

  /*
//husky
  const url2= "https://dog.ceo/api/breed/husky/images/random/6";
 

  fetch(url2)
  .then(function (response) {       // .then returns a promise (proxy for unknown value)
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);       // temporary checking for valid response and data parsing
   
      const img = jsonObject['message'];
      
      for (let i = 0; i < img.length; i++ ) {
     
          let card = document.createElement('section');        // add html elements
          let p = document.createElement('p');
          let image = document.createElement('img');
                 
          image.setAttribute('src', img[i]);              
          image.setAttribute('class', 'randomImage');
          p.setAttribute('class', 'info');
          card.setAttribute('class', 'dogCard');
   
           card.appendChild(p);
           card.appendChild(image);
         
         
       
          document.querySelector('div.results2').appendChild(card);
     
           
      }
    });

    //boxer
  const url3= "https://dog.ceo/api/breed/boxer/images/random/6";
 
 
  fetch(url3)
  .then(function (response) {       // .then returns a promise (proxy for unknown value)
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);       // temporary checking for valid response and data parsing
   
      const img = jsonObject['message'];
      
      for (let i = 0; i < img.length; i++ ) {
     
          let card = document.createElement('section');        // add html elements
          let p = document.createElement('p');
          let image = document.createElement('img');
                 
          image.setAttribute('src', img[i]);              
          image.setAttribute('class', 'randomImage');
          p.setAttribute('class', 'info');
          card.setAttribute('class', 'dogCard');
   
           card.appendChild(p);
           card.appendChild(image);
         
         
       
          document.querySelector('div.results3').appendChild(card);
     
           
      }
    });
*/
   

/*
1) use local json for info about each dog
2) local storage??
3) modules
4) search function w/json
5) add audio element around buttons(?)
*/ 