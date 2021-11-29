
const key = 'xwPTzdBO8s90UmgqV0AkJ83ieYQfjSSFc41SLWmouxNOqfUcxr';
const secret = 'DEKXDEjqwstYy5MHM3UEPE98MzGjrHpxEI3q03sJ';
const baseUrl = 'https://api.petfinder.com/v2/oauth2/token';


async function makeRequest(url, method = 'GET', body = null) {
    // we will need to set some custom options for our fetch call
      let options = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      }
    };
    // if we are sending any data with the request add it here
    if (method == 'POST' || method == 'PUT') {
      options.body = JSON.stringify(body);
    }
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
      }
    const response = await fetch(baseURL + url, options);
    // in this case we are processing the response as JSON before we check the status. The API we are using will send back more meaningful error messages than the default messages in the response, but we have to convert it before we can get to them.
    const data = await response.json();
  
    if (!response.ok) {
      // server will send a 500 server error if the token expires...or a 401 if we are not authorized, ie bad username/password combination, and a 404 if the URL we requested does not exist. All of these would cause response.ok to be false
  
      console.log(response);
      throw new Error(`${data.status}: ${data.message}`);
    } else return data;
  
    // not catching the error here...so we will need to catch it later on and handle it.
    
  }
export { makeRequest };


/*
fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
    mode: 'cors',
	body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}

}).then(function (resp) {

	// Return the response as JSON
	return resp.json();

}).then(function (data) {

	// Log the API data
	console.log('token', data);

    // Call details
var org = 'RI77';
var status = 'adoptable';
	// Return a second API call
	// This one uses the token we received for authentication
	return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
		headers: {
			'Authorization': 'Bearer' + data.access_token,
             //data.token_type + ' ' + data.access_token,
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});

}).then(function (resp) {

	// Return the API response as JSON
	return resp.json();

}).then(function (data) {

	// Log the pet data
	console.log('pets', data);

}).catch(function (err) {

	// Log any errors
	console.log('something went wrong', err);
});
    /*
    fetch('https://api.petfinder.com/v2/animals')
    .then(response => response.json())
    .then(pets => showAnimals(pets.animals));
 
    showAnimals = pets => {
     const animalsDiv = document.querySelector('div.results');
     pets.forEach(pets => {
       const animalElement = document.createElement('p');
       animalElement.innerText = `Character Name: ${pets.animals.breed}`;
       animalsDiv.append(animalElement);
     });
   }  
   
});



function getAnimal(){
    const info = pets.animals[i];
for (let i = 0; i < info.length; i++ ) {
   
  
    let card = document.createElement('section');        // add html elements
    let p = document.createElement('p');
    
           
    //image.setAttribute('src', img[i]);              
    //image.setAttribute('class', 'randomImage');
    p.setAttribute('class', 'info');
    card.setAttribute('class', 'dogCard');

     card.appendChild(p);
     //card.appendChild(image);
   
   
 
    document.querySelector('div.results').appendChild(card);

  
}}
*/