var inputs = document.querySelectorAll("input[type='text']")
var saveinfo = document.querySelector('#saveinfo')
var table = document.querySelector('#tbody')
var DeleteButton = document.getElementsByClassName("btn")
var tr_rows = document.getElementsByTagName("tr");
const save = document.querySelector('#save');

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

function lagre() {
    console.log("lagre knapp trykket")
    const table = document.getElementById('mytable').getElementsByTagName('tbody')[0];
    console.log(table)
    const rows = table.getElementsByTagName('tr');
    const data = [];

    for (let i = 0; i < rows.length; i++){
        const cells = rows[i].getElementsByTagName('td');
        const rowdata = {};
        rowdata.id = cells[0].textContent
        rowdata.merke = cells[1].textContent
        rowdata.modell = cells[2].textContent
        rowdata.price = cells[3].textContent
        rowdata.motor = cells[4].textContent
        rowdata.topspeed= cells[5].textContent
        data.push(rowdata);

    }
    return data;
    console.log(localStorage)
}

//const tabledata = lagre();
//localStorage.setItem('tabledata',JSON.stringify(tabledata));

save.addEventListener('click', lagre)
