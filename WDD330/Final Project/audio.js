

 const audioSrc = document.querySelector('li.audioItem').innerHTML;
 const input = document.getElementById('audioInput');
 /*function searchAudio(){
    if(input === audioSrc){
        audioSrc.style.display = 'block';

    }
    else{
        audioSrc.style.display = 'none';
        alert('Sorry, no bark available for this breed yet!');
    }

  
 
  }
    
 */
  document.getElementById("doggo").onclick = function() {
    var audio = document.getElementById("doggoBark");
    if (audio.paused) audio.play();
    else audio.pause();
};
  
  
  

