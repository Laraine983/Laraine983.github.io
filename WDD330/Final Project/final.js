
const key = 'xwPTzdBO8s90UmgqV0AkJ83ieYQfjSSFc41SLWmouxNOqfUcxr';
const secret = 'DEKXDEjqwstYy5MHM3UEPE98MzGjrHpxEI3q03sJ';
const baseUrl = 'https://api.petfinder.com/v2/oauth2/token';

fetch('https://api.petfinder.com/v2/oauth2/token', {
	method: 'POST',
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
			'Authorization': data.token_type + ' ' + data.access_token,
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
   */
});


/*
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