function toggleMenu(){
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
 }

 function adjustRating(rating) {
   document.getElementById("ratingAmt").innerHTML = rating;     /*JS from example given by Jason Blazzard*/
}


 WebFont.load({
    google: {
    families: [
       'Yusei Magic'
    ]
    }
    });