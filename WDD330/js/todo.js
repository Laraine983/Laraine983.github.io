
function addTask(){
    var p = document.createElement("p");  
    var input = document.getElementById("inputBox");
    p.innerHTML = input.value;
    input.value = "";

    document.getElementById("taskList").appendChild(p);
}

/*
function removeItem(){
    let item = document.getElementById("deleteMe");
    item.remove();
}
*/