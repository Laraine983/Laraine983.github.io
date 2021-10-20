
function addTask(){
    let p = document.createElement("p");  
    p.setAttribute("id", "taskItem");
    let input = document.getElementById("inputBox");
    p.innerHTML =  ` <label class="checkContainer">
    <input id="checkmark" class="checkmark done" type="checkbox" checked="checked">
    <span class="checkmark"></span>
  </label>` + input.value +  `<button id="delete" onclick="removeItem()">X</button>`;
    

    document.getElementById("taskList").appendChild(p);
}

function removeItem() {
    let deleteItem = document. getElementById("taskItem");
    deleteItem.remove();
    }

  






  


