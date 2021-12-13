

 document.getElementById("tryAudio").onchange = function() {
var e = document.querySelector("select.breeds")
var strUser = e.options[e.selectedIndex].text;
console.log(strUser);

for (let i = 0; i < strUser.length; i++) {
 
    let barkAudio = document.getElementById('bark');
    barkAudio.setAttribute('src', './audio/'+ `${strUser}` +'.mp3')
   

    document.getElementById("doggo").onclick = function() {
      var audio = document.getElementById("bark");
      if (audio.paused) audio.play();
      else audio.pause();
  };
  

  }
 
}



