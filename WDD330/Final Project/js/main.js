

const mainurl = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds');
const selectedValue = document.getElementById("breeds").value;


fetch(mainurl)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {
      const option = document.createElement('option');
      
      option.setAttribute('class', 'placeholder');
      option.value = breedsArray[i];
      option.innerText = breedsArray[i];
      select.appendChild(option);
    }
   
  });

select.addEventListener('change', e => {
  let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
  getDoggo(url);
});



const img = document.querySelector('.dog-img');
const spinner = document.querySelector('.spinner');

const getDoggo = url => {
  spinner.classList.add('show');
  img.classList.remove('show');
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      img.src = data.message;
    });
    
};

img.addEventListener('load', () => {
  spinner.classList.remove('show');
  img.classList.add('show');
  
});



//add active class to favorites button
document.getElementById('faves').onclick = function() {
  this.classList.toggle('active');
}

//show favorited items on separate page?


function moreInfo() {
  var x = document.getElementById("displayMore");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
