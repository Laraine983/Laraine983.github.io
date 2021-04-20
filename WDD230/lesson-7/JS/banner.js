
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let d = new Date();
let day = d.getDay(); 
let date = d.getDate();

if (weekDays[day] == 'Friday') {
    document.getElementById("friday-banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("friday-banner").style.display = "block";
}
else {
    document.getElementById("friday-banner").style.display = "none";
}