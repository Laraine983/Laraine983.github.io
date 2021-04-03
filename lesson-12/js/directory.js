const directURL = "https://laraine983.github.io/lesson-12/json/directory.json";      //connect to my JSON file

fetch(directURL)
  .then(function (response) {      
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);       

    const business = jsonObject['business'];
    for (let i = 0; i < business.length; i++) {
         
    document.getElementById("heading-1").textContent = business[0].name;
    document.getElementById("phone-1").textContent = business[0].phone;
    document.getElementById("site-1").textContent = business[0].website;
    document.getElementById("address-1").textContent = business[0].address;

    document.getElementById("heading-2").textContent = business[1].name;
    document.getElementById("phone-2").textContent = business[1].phone;
    document.getElementById("site-2").textContent = business[1].website;
    document.getElementById("address-2").textContent = business[1].address;

    document.getElementById("heading-3").textContent = business[2].name;
    document.getElementById("phone-3").textContent = business[2].phone;
    document.getElementById("site-3").textContent = business[2].website;
    document.getElementById("address-3").textContent = business[2].address;

    document.getElementById("heading-4").textContent = business[3].name;
    document.getElementById("phone-4").textContent = business[3].phone;
    document.getElementById("site-4").textContent = business[3].website;
    document.getElementById("address-4").textContent = business[3].address;

    document.getElementById("heading-5").textContent = business[4].name;
    document.getElementById("phone-5").textContent = business[4].phone;
    document.getElementById("site-5").textContent = business[4].website;
    document.getElementById("address-5").textContent = business[4].address;

    document.getElementById("heading-6").textContent = business[5].name;
    document.getElementById("phone-6").textContent = business[5].phone;
    document.getElementById("site-6").textContent = business[5].website;
    document.getElementById("address-6").textContent = business[5].address;

    document.getElementById("heading-7").textContent = business[6].name;
    document.getElementById("phone-7").textContent = business[6].phone;
    document.getElementById("site-7").textContent = business[6].website;
    document.getElementById("address-7").textContent = business[6].address;

    document.getElementById("heading-8").textContent = business[7].name;
    document.getElementById("phone-8").textContent = business[7].phone;
    document.getElementById("site-8").textContent = business[7].website;
    document.getElementById("address-8").textContent = business[7].address;




    }
  });
  
  //source:  https://www.w3schools.com/howto/howto_js_list_grid_view.asp

let businesses = document.getElementsByClassName("grid");

let i;

function listView() {
  for (i = 0; i < businesses.length; i++) {
    businesses[i].style.width = "100%";
  }
}


function gridView() {
  for (i = 0; i < businesses.length; i++) {
    businesses[i].style.width = "50%";
  }
}



    
 
 