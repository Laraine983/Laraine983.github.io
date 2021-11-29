//cat api api key: fe962b92-42b3-407d-a606-5ef01fc37aa7
//petfinder api key: xwPTzdBO8s90UmgqV0AkJ83ieYQfjSSFc41SLWmouxNOqfUcxr
//petfinder secret: DEKXDEjqwstYy5MHM3UEPE98MzGjrHpxEI3q03sJ


import { makeRequest } from './final.js';
export default class Auth {
  constructor() {
    this.jwtToken = '';
    this.user = {};
  }

  async login(callback) {
    // replace the ids below with whatever you used in your form.
    //const password = document.getElementById('password');
    //const username = document.getElementById('username');
    const postData = {
      breed: animals.breeds,
      //password: password.value  
    };
    try {
      // 1. use the makeRequest function to pass our credentials to the server
      
      // 2. if we get a successful response...we have a token!  Store it since we will need to send it with every request to the API.
      
      // let's get the user details as well and store them locally in the class
      // you can pass a query to the API by appending it on the end of the url like this: 'users?email=' + email
      this.user = await this.getCurrentUser(username.value);
      // hide the login form.
      document.getElementById('login').classList.add('hidden');
      // clear the password
      password.value = '';
      
      // since we have a token let's go grab some data from the API by executing the callback if one was passed in
      if(callback) {
        callback();
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }
  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
      // 3. add the code here to make a request for the user identified by email...don't forget to send the token!
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }
  
  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this.
  }
  get token() {
    return this.jwtToken;
  }
} // end auth class

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