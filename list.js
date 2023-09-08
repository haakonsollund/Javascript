var inputs = document.querySelectorAll("input[type='text']")
var saveinfo = document.querySelector('#saveinfo')
var table = document.querySelector('#tbody')
var DeleteButton = document.getElementsByClassName("btn")

console.log(inputs)

var int = 0



function save_function(){
     var tr = "<tr>"
    

    inputs.forEach(
        function(node,index){
            int = index
            console.log(node.value)
            tr +=  b"<td>" + node.value + "</td>"
        })
    tr += "<td><button id='btn" + index + "'>delete</button></td>"
    tr += "</tr>"

    var DeleteButton = document.getElementsByClassName("btn")
        console.log(DeleteButton)

    for(var i = 0; i < DeleteButton.length; i++){ 
        var test123 = document.getElementById('btn' + i)
        test123.addEventListener("click", removeitem);

        console.log("added delete event")
        
    }           


    
    console.log("button clicked.")
    table.innerHTML += tr

    console.log(tr)
}

for(var i = 0; i < DeleteButton.length; i++){ 
    DeleteButton[i].addEventListener("click", removeitem); 
    
}
    
function removeitem(){
    this.parentNode.parentNode.remove();
    console.log("delete button clicked")
}



saveinfo.addEventListener("click", save_function)


