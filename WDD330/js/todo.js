const list = document.querySelector('ul');
const complete = document.getElementsByClassName('completedButton');

function addListItem(){
    var item = document.createElement("li");  
    item.setAttribute("class", "taskItem");
    var input = document.getElementById("myInput");
    item.innerHTML = 
    `<label class="checkContainer">
    <input id="input" type="checkbox" >
    </label>`
   + input.value + 
    `<button class="deleteBtn">X</button>`;
    
    document.getElementById("myUL").appendChild(item);
    document.getElementById("myInput").value = '';
}



list.addEventListener('click', (e) => {
  if (e.target.classList.contains('deleteBtn') === true) {
    e.target.parentElement.remove();
    }
});




function checkItems() {
var v = document.getElementsByClassName("taskItem");
  if (document.querySelectorAll('input[type=checkbox]:checked')) {
            v.classList.add("checkMarked");
        } 


}
  function completedTasks() {
var v = document.getElementsByClassName("taskItem");
  if (v.classList == "checkMarked") {
            v[0].style.display = 'block';
        } 
else{
  v[0].style.display = 'none';
}
}
  


function activeTasks(){
  var v = document.getElementsByClassName("taskItem");
  if (v.classList !== "checkMarked") {
            v[0].style.display = 'block';
        } 
else{
  v[0].style.display = 'none';
}}
  



function selectAll(){
  var v = document.getElementsByClassName("taskItem");
  v[0].style.display = 'block';
}





  


