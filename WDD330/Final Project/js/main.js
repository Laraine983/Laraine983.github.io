

const mainurl = 'https://dog.ceo/api/breeds/list/all';

const select = document.querySelector('.breeds');
const selectedValue = document.getElementById("breeds").value;

//fetch breed list & create select option for each breed 
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

  //get url for images, change when new option is clicked
select.addEventListener('change', e => {
  let url = `https://dog.ceo/api/breed/${e.target.value}/images/random`;
  getDoggo(url);
});


//change the class on image to show
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



//show/hide div with more info about each doggo
function moreInfo() {
  var x = document.getElementById("displayMore");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
