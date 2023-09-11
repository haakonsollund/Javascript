var inputs = document.querySelectorAll("input[type='text']")
var saveinfo = document.querySelector('#saveinfo')
var table = document.querySelector('#tbody')
var DeleteButton = document.getElementsByClassName("btn")

console.log(inputs)

var int = 0



function save_function(){
    var tr = document.createElement("tr");
    
    var deleteButton = document.createElement("button");
    inputs.forEach(
        function(node,index){
            var td = document.createElement("td");
            
            console.log(node.value)

            td.textContent += node.value
            tr.appendChild(td)
            
          
        })
   
    
    var td = document.createElement("td");
    tr.appendChild(td)
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", removeItem);
    td.appendChild(deleteButton)

    
    console.log("button clicked.")
    table.appendChild(tr);

    console.log(tr)
}

for(var i = 0; i < DeleteButton.length; i++){ 
    DeleteButton[i].addEventListener("click", removeItem); 
    
}
    
function removeItem(){
    this.parentNode.parentNode.remove();
    console.log("delete button clicked")
}

function readTable(){
    const table =document.getElementById('tbody') 
}



saveinfo.addEventListener("click", save_function)


