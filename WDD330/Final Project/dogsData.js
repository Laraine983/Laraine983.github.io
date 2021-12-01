

const dogsData = [
    {
        "breed":"african",
        "lifespan": "10-20 years",
        "colors": ["black", "tan", "white"],
        "origin": "South Africa",
        "weight": "55-100 lbs"
        },
      {
        "breed": "akita",
        "lifespan": "10-14 years",
        "colors": ["black", "red", "white"],
        "origin": "Japan",
        "weight": "75-120 lbs",
        "bark": "./audio/akita.mp3"
      },
      {
        "breed": "australian",
        "lifespan": "12-15 years",
        "colors": ["black", "blue merle", "red merle"],
        "origin": "USA",
        "weight": "40-65 lbs"
      },
      {
        "breed": "beagle",
        "lifespan": "12-15 years",
        "colors": ["black & tan", "red", "white"],
        "origin": "United Kingdom",
        "weight": "20-25 lbs",
        "bark": "./audio/beagle.mp3"
      },
      {
        "breed": "boxer",
        "lifespan": "10-12 years",
        "colors": ["brown", "white"],
        "origin": "Germany",
        "weight": "53-70 lbs"
      },
      {
        "breed": "bulldog",
        "lifespan": "10-12 years",
        "colors": ["tan", "white", "red"],
        "origin": "United Kingdom",
        "weight": "49-55 lbs"
      },
      {
        "breed": "bullterrier",
        "lifespan": "10-12 years",
        "colors": ["black", "brown", "white"],
        "origin": "United Kingdom",
        "weight": "45-80 lbs"
      },
      {
        "breed": "chihuahua",
        "lifespan": "14-18 years",
        "colors": ["black", "chocolate", "red", "white"],
        "origin": "Mexico",
        "weight": "2-6 lbs"
      },
      {
        "breed": "chow",
        "lifespan": "13-15 years",
        "colors": ["black", "blue", "cream", "red"],
        "origin": "China",
        "weight": "45-70 lbs"
      },
      {
        "breed": "cockapoo",
        "lifespan": "14-18 years",
        "colors": ["black", "tan", "red", "white"],
        "origin": "USA",
        "weight": "12-24 lbs"
      },
      {
        "breed": "collie",
        "lifespan": "14-16 years",
        "colors": ["blue merle", "black, white, & tan", "white"],
        "origin": "United Kingdom",
        "weight": "50-75 lbs"
      },
      {
        "breed": "corgi",
        "lifespan": "12-15 years",
        "colors": ["black", "white", "blue merle", "tan"],
        "origin": "United Kingdom",
        "weight": "25-30 lbs"
      },
      {
        "breed": "dachschund",
        "lifespan": "12-15 years",
        "colors": ["black", "brown", "red", "white"],
        "origin": "Germany",
        "weight": "8-32 lbs"
      },
      {
        "breed": "dalmation",
        "lifespan": "12-14 years",
        "colors": ["black & white"],
        "origin": "Croatia",
        "weight": "50-55 lbs"
      },
      {
        "breed": "dane",
        "lifespan": "7-10 years",
        "colors": ["black", "blue", "white", "merle"],
        "origin": "Germany",
        "weight": "100-200 lbs"
      },
      {
        "breed": "doberman",
        "lifespan": "10-12 years",
        "colors": ["black", "tan", "red", "white"],
        "origin": "Germany",
        "weight": "70-100 lbs"
      },
      {
        "breed": "germanshepherd",
        "lifespan": "10-13 years",
        "colors": ["tan", "black"],
        "origin": "Germany",
        "weight": "50-88 lbs"
      },
      {
        "breed": "greyhound",
        "lifespan": "10-13 years",
        "colors": ["black", "blue", "gray", "red", "white"],
        "origin": "United Kingdom",
        "weight": "27-80 lbs"
      },
      {
        "breed": "husky",
        "lifespan": "12-14 years",
        "colors": ["white & black", "white", "red & white"],
        "origin": "Russia",
        "weight": "35-60 lbs"
      },
      {
        "breed": "labradoodle",
        "lifespan": "12-15 years",
        "colors": ["black", "tan", "golden", "white"],
        "origin": "Australia",
        "weight": "30-70 lbs"
      },
      {
        "breed": "labrador",
        "lifespan": "10-12 years",
        "colors": ["black", "chocolate", "yellow"],
        "origin": "Canada",
        "weight": "55-75 lbs"
      },
      {
        "breed": "malamute",
        "lifespan": "12-15 years",
        "colors": ["black", "gray", "white", "red"],
        "origin": "USA",
        "weight": "70-95 lbs"
      },
      {
        "breed": "mastiff",
        "lifespan": "10-12 years",
        "colors": ["tan", "black"],
        "origin": "United Kingdom",
        "weight": "120-250 lbs"
      },
      {
        "breed": "pitbull",
        "lifespan": "10-14 years",
        "colors": ["black", "tan", "blue", "red", "white"],
        "origin": "USA",
        "weight": "22-78 lbs"
      },
      {
        "breed": "pomeranian",
        "lifespan": "12-16 years",
        "colors": ["black", "tan", "red", "white"],
        "origin": "Germany",
        "weight": "3-7 lbs"
      },
      {
        "breed": "poodle",
        "lifespan": "12-15 years",
        "colors": ["black", "white", "tan", "red"],
        "origin": "France",
        "weight": "45-70 lbs"
      },
      {
        "breed": "pug",
        "lifespan": "12-15 years",
        "colors": ["black", "tan"],
        "origin": "China",
        "weight": "13-20 lbs"
      },
      {
        "breed": "retriever",
        "lifespan": "10-12 years",
        "colors": ["tan", "golden"],
        "origin": "United Kingdom",
        "weight": "55-80 lbs"
      },
      {
        "breed": "rottweiler",
        "lifespan": "8-11 years",
        "colors": ["black & tan"],
        "origin": "Germany",
        "weight": "85-130 lbs"
      },
      {
        "breed": "schnauzer",
        "lifespan": "12-15 years",
        "colors": ["black", "grey"],
        "origin": "Germany",
        "weight": "30-45 lbs"
      },
      {
        "breed": "shihtzu",
        "lifespan": "10-16 years",
        "colors": ["black", "blue", "gold", "red"],
        "origin": "China",
        "weight": "9-16 lbs"
      },
      {
        "breed": "spaniel",
        "lifespan": "10-14 years",
        "colors": ["black & tan", "white & black"],
        "origin": "United Kingdom",
        "weight": "10-18 lbs"
      },
      {
        "breed": "terrier",
        "lifespan": "12-16 years",
        "colors": ["black & tan"],
        "origin": "United Kingdom",
        "weight": "4-7 lbs"
      }
];



 function change(){
var e = document.querySelector("select.breeds");
var strUser = e.options[e.selectedIndex].text;
console.log(strUser);

for (let i = 0; i < dogsData.length; i++) {

if(strUser === dogsData[i].breed){
    document.querySelector('h2.breedName').textContent = dogsData[i].breed;
    document.querySelector('p.weight').textContent = 'Weight:' + '\n' + dogsData[i].weight;
    document.querySelector('p.lifespan').textContent = 'Lifespan:' + '\n' + dogsData[i].lifespan;
    document.querySelector('p.colors').textContent = 'Colors:' + '\n' + dogsData[i].colors;
    document.querySelector('p.origin').textContent = 'Origin:' + '\n' + dogsData[i].origin;
}
 }
 }
