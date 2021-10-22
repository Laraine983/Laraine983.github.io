

let taskList = document.getElementsByTagName("li");
let i;
for (i = 0; i < taskList.length; i++) {
  let div = document.createElement("div");
  
  div.className = "close";
  div.appendChild(txt);
  taskList[i].appendChild(div);
}


let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}


let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let div = document.createElement("div");
  let txt = document.createTextNode("X");
  div.className = "close";
  div.appendChild(txt);
  li.appendChild(div);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}



/*
function addTask(){
    let p = document.createElement("p");  
    p.setAttribute("id", "taskItem");
    let input = document.getElementById("inputBox");
    p.innerHTML = 
    `<label class="checkContainer">
    <input id="checkmark" class="checkmark done" type="checkbox" >
    <div class="checkmark"></div>
    </label>`
   + input.value + 
    `<button id="delete" onclick="removeItem()">X</button>`;
    

    document.getElementById("taskList").appendChild(p);
    document.getElementById("inputBox").value = '';
}

function removeItem() {
    let deleteItem = document.getElementById("taskItem");
    deleteItem.remove();
    }

  
*/





  


