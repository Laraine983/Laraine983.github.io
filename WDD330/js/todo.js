

var taskList = document.getElementsByTagName("li");
var i;
for (i = 0; i < taskList.length; i++) {
  var div = document.createElement("div");
  
  div.className = "close";
  div.appendChild(txt);
  taskList[i].appendChild(div);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var div = document.createElement("div");
  var txt = document.createTextNode("x");
  div.className = "close";
  div.appendChild(txt);
  li.appendChild(div);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



/*
function addTask(){
    var p = document.createElement("p");  
    p.setAttribute("id", "taskItem");
    var input = document.getElementById("inputBox");
    p.innerHTML = 
    `<label class="checkContainer">
    <input id="checkmark" class="checkmark done" type="checkbox" >
    <div class="checkmark"></div>
    </label>`
   + input.value + 
    `<button id="devare" onclick="removeItem()">X</button>`;
    

    document.getElementById("taskList").appendChild(p);
    document.getElementById("inputBox").value = '';
}

function removeItem() {
    var devareItem = document.getElementById("taskItem");
    devareItem.remove();
    }

  
*/





  


