var inputs = document.querySelectorAll("input[type='text']")
var saveinfo = document.querySelector('#saveinfo')
var table = document.querySelector('#tbody')
var DeleteButton = document.getElementsByClassName("btn")
var tr_rows = document.getElementsByTagName("tr");

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
     var tr_rows = document.getElementsByTagName("tr");

    for(var i = 0; i < tr_rows.length; i++){
        tr_rows[i].addEventListener("click",set_inputs)
    }

    console.log(tr)
}

for(var i = 0; i < DeleteButton.length; i++){ 
    DeleteButton[i].addEventListener("click", removeItem); 
    
}


for(var i = 0; i < tr_rows.length; i++){
    tr_rows[i].addEventListener("click",set_inputs)
}
    
function removeItem(){
    this.parentNode.parentNode.remove();
    console.log("delete button clicked")
}



function set_inputs(){
    console.log(this)
    var tds = this.childNodes
    console.log(tds)
    tds.forEach(function(node,index){
        console.log(node,index)
            if (index != 11){
                node.innerHTML = "<input type='text' value='"+node.innerHTML +"'>"

            }

        
    })
    this.removeEventListener("click",set_inputs)

    this.addEventListener('keypress', function (e) {
        if (e.key ===   'Enter') {
            this.addEventListener("click",set_inputs)
            save_row(this)
        }
    });
    

}

function save_row(row){
    console.log("hello world")
    console.log(row)
    var tds = row.childNodes
    tds.forEach(function(node,index){
        console.log(node,index)
            if (index != 11){
                console.log(node)
                node.innerHTML = node.children[0].value
            }
        
    })
}


saveinfo.addEventListener("click", save_function)


