
let barkAudio = document.getElementById('bark');
barkAudio.setAttribute('src', './audio/akita.mp3')

  document.getElementById("doggo").onclick = function() {
    var audio = document.getElementById("bark");
    if (audio.paused) audio.play();
    else audio.pause();
};
  
  //if/switch statements for each dog/bark if(dog/option == name of dog) play specific audio file 
  //add audio files to json and pull that way??
  

