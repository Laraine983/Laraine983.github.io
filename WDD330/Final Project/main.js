//cat api api key: fe962b92-42b3-407d-a606-5ef01fc37aa7
//petfinder api key: xwPTzdBO8s90UmgqV0AkJ83ieYQfjSSFc41SLWmouxNOqfUcxr
//petfinder secret: DEKXDEjqwstYy5MHM3UEPE98MzGjrHpxEI3q03sJ

//https://dog.ceo/dog-api/
const url= "https://dog.ceo/api/breeds/image/random/6";


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
   
          
    }
  });



/*drag and drop bone image

// Make the DIV element draggable:
dragElement(document.getElementById("bone"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("bone")) {
    // if present, the header is where you move the DIV from:
    document.getElementById("bone2").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
*/

/*
1) use local json for info about each dog
2) local storage??
3) modules
4) search function w/json
5) next, previous pages?
*/ 