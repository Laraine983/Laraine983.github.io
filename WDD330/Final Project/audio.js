
let barkAudio = document.getElementById('bark');
barkAudio.setAttribute('src', './audio/akita.mp3')

  document.getElementById("doggo").onclick = function() {
    var audio = document.getElementById("bark");
    if (audio.paused) audio.play();
    else audio.pause();
};

//fetch json file

fetch('./info.json', { 
  method: 'GET'
})
.then(function(response) { return response.json(); })
.then(function(json) {
  let dogs = json['dogs'];
  let selectedValue = document.getElementById("breeds").value;
for (let i = 0; i < dogs.length; i++) {
  
  let weight = dogs[i].weight; 
  let breeds = dogs[i].breed;

  if(selectedValue = breeds){     
                                                //need to match content with selected dog, not all dogs


 //card
 let infoCard = document.createElement('section');
 infoCard.setAttribute('class', 'infoCard');

 //weight
 let weights = document.createElement('p');
 weights.textContent = 'Weight:' + '' + weight;

 //append
 infoCard.appendChild(weights);
 document.querySelector('div.information').appendChild(infoCard);

 }
else{
  weight.style.display="none";
}

}
});


//get breed name from select value
function getSelectValue()
{
  let selectedValue = document.querySelector("select.breeds").value;
    let breedName = document.querySelector('h2.breedName');
    breedName.innerHTML = selectedValue;
}