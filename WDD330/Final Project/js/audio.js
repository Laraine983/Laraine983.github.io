
//get audio file, play/pause when img is clicked

let barkAudio = document.getElementById('bark');
barkAudio.setAttribute('src', './audio/akita.mp3')

  document.getElementById("doggo").onclick = function() {
    var audio = document.getElementById("bark");
    if (audio.paused) audio.play();
    else audio.pause();
};



