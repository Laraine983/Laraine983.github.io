
//put this into json file and fetch instead
fetch("data.json")
  .then(response => response.json())
  .then(json => console.log(json));
/*
function change() {
  var e = document.querySelector("select.breeds");
  var strUser = e.options[e.selectedIndex].text;
  console.log(strUser);
let dogsData = json.dogsData;
  for (let i = 0; i < dogsData.length; i++) {
    if (strUser === dogsData[i].breed) {
      document.querySelector("h2.breedName").textContent = dogsData[i].breed;
      document.querySelector("p.weight").textContent =
        "Weight:" + "\n" + dogsData[i].weight;
      document.querySelector("p.lifespan").textContent =
        "Lifespan:" + "\n" + dogsData[i].lifespan;
      document.querySelector("p.colors").textContent =
        "Colors:" + "\n" + dogsData[i].colors;
      document.querySelector("p.origin").textContent =
        "Origin:" + "\n" + dogsData[i].origin;
    }
  }
}
*/