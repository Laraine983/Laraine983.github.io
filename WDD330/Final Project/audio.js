
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

  let breed = json.dogs[i].breed;
  // use the json
  console.log(breed);
});

function getSelectValue()
{
  let selectedValue = document.getElementById("breeds").value;
    let breedName = document.querySelector('h2.breedName');
    breedName.innerHTML = selectedValue;
}