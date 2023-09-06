var inputs = document.querySelectorAll("input[type='text']")
var saveinfo = document.querySelector('#saveinfo')
var table = document.querySelector('#tbody')
var DeleteButton = document.querySelector('#btn')

console.log(inputs)





function save_function(){
     var tr = "<tr>"
    

    inputs.forEach(
        function(node,index){
            console.log(node.value)
            tr += "<td>" + node.value + "</td>"
        })
    tr += "</tr>"

    
    console.log("button clicked.")
    table.innerHTML += tr

    console.log(tr)
}

for(var i = 0; i < DeleteButton.length; i ++){
    
}
    
function removeitem(){
    this.parentNode.remove();
    console.log("delete button clicked")
}



saveinfo.addEventListener("click", save_function)
DeleteButton[i].addEventListener("click", removeitem);
