
//get audio file, play/pause when img is clicked

/*let barkAudio = document.getElementById('bark');
barkAudio.setAttribute('src', './audio/akita.mp3')

  document.getElementById("doggo").onclick = function() {
    var audio = document.getElementById("bark");
    if (audio.paused) audio.play();
    else audio.pause();
};
*/


 document.querySelector("select.breeds").onchange = function() {
var e = document.querySelector("select.breeds")
var strUser = e.options[e.selectedIndex].text;
console.log(strUser);
//let dogsData = e["dogsData"];
for (let i = 0; i < strUser.length; i++) {
 // if (strUser === dogsData[i].breed) {
    let barkAudio = document.getElementById('bark');
    barkAudio.setAttribute('src', './audio/'+ `${strUser}` +'.mp3')
    console.log(barkAudio);

    document.getElementById("doggo").onclick = function() {
      var audio = document.getElementById("bark");
      if (audio.paused) audio.play();
      else audio.pause();
  };
  }
}



