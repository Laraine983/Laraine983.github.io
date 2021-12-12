

// add list item when clicking + button
function newElement() {
  var li = document.createElement("li");
  var input = document.getElementById("taskInput").value;
  var task = document.createTextNode(input);
  li.appendChild(task);
  if (input === '') {
    alert("Add a task");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("taskInput").value = "";

  var item = document.createElement("span");
  var x = document.createTextNode("X");
  item.className = "deleteItem";
  item.appendChild(x);
  li.appendChild(item);

  //delete when x is clicked
  for (i = 0; i < deleteItem.length; i++) {
    deleteItem[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// toggle class on task items when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



//BUTTONS

//delete task button
var deleteItem = document.getElementsByClassName("deleteItem");
var i;
for (i = 0; i < deleteItem.length; i++) {
  deleteItem[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


//completed tasks button
function completedTasks(){
  var changeView = document.querySelectorAll('li');
  changeView.forEach(li => {
      if (!li.classList.contains("checked")) {
        li.style.display = "none";
      } else {
        li.style.display = "block";
      }
  });
}

//all tasks button
function allTasks(){ 
    var changeView = document.querySelectorAll('li');
    changeView.forEach(li => {
      li.style.display = "block";
    });
 }




function selectAll(){
  var v = document.getElementsByClassName("taskItem");
  v[0].style.display = 'block';
}





  


