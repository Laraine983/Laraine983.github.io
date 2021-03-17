function toggleMenu(){
  console.log(document.getElementById("primaryNav").classList);
  document.getElementById("primaryNav").classList.toggle("hide");
}


//home page
    
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';     // URL to the JSON file 

fetch(requestURL)
  .then(function (response) {       // .then returns a promise (proxy for unknown value) 
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {  //select the 3 towns to be displayed
    
   
   let card = document.createElement('section');        // add html elements
   let name = document.createElement('h2');
   let motto = document.createElement('p'); 
   let yearFounded = document.createElement('p');
   let currentPopulation = document.createElement('p'); 
   let averageRainfall = document.createElement('p');
   let photo = document.createElement('img');         
  
    name.textContent = towns[i].name;
    motto.textContent = towns[i].motto;
    yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
    currentPopulation.textContent = 'Current Population: ' + towns[i].currentPopulation;
    averageRainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
    photo.setAttribute('src', "Images/" + towns[i].photo);
    photo.setAttribute('alt', "Photo of the town of " + towns[i].name);
    
    card.appendChild(name);
    card.appendChild(motto);
    card.appendChild(yearFounded);
    card.appendChild(currentPopulation);
    card.appendChild(averageRainfall);
    card.appendChild(photo);       

    document.querySelector('div.cards').appendChild(card);

    
  }
}
  });


  //storm center slider
  function adjustRating(rating) {               
    document.getElementById("ratingAmt").innerHTML = rating;     /*JS from example given by Jason Blazzard*/
 }
 

 //gallery page

/* Original Creator: Kevin Powell  https://www.youtube.com/watch?v=mC93zsEsSrg&feature=emb_logo */

const images = document.querySelectorAll("[data-src]");  /*pulls items with specific [data-src] attribute*/

function preloadImage(img){ /* function searches for img */
    const src = img.getAttribute("data-src"); /* finds data-src attribute within img */
    if(!src){        /* if no data-src found, return. */
        return;
    }
    img.src = src;   /* If data-src is found, const src will make data-src become src (make image appear) */ 
    img.removeAttribute("data-src") ; 
}

const imgOptions = {
    threshold: 1,                       /* higher threshold means slower loading time of images*/
    rootMargin: " 0px 0px -100px 0px",  /* -100 loads image when image is 100px into the viewport. Positive 100 would load 100px before viewport*/
                                        /* Can use different numbers, i.e. -500, -400, -300...300, 400, 500 px */
};

const imgObserver = new IntersectionObserver((entries, imgObserver) =>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting){    /* if entry is not intersecting, return. Else, load image */
            return;
        } else{
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target); /* once image is preloaded, stop observing it with unobserve */
        }
    })

}, imgOptions);

images.forEach(image => {           /* cannot apply one imgObserver to entire list of images, 
                                    we need to run imgObserver for each image inside of images list (observe each image individually)*/ 
    imgObserver.observe(image);
});




//friday banner
  let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date();
  let day = d.getDay(); 
  let date = d.getDate();
  
  if (weekDays[day] == 'Friday') {
      document.getElementById("friday-banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
      document.getElementById("friday-banner").style.display = "block";
  }
  else {
      document.getElementById("friday-banner").style.display = "none";
  }




//get date - footer
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);

//load fonts
WebFont.load({
  google: {
  families: [
     'Yusei Magic'
  ]
  }
  });





 
 

