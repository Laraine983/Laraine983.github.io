
function searchAudio(){
 const audioSrc = document.querySelector('li.audioItem').value;
 const input = document.getElementById('audioInput');

    if(input === audioSrc){
        audioSrc.style.display = '';

    }
    else{
        audioSrc.style.display = 'none';
        alert('Sorry, no bark available for this breed yet!');
    }

  
 
  }
    
 
  
  
  
  

