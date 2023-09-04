var inputs = document.querySelectorAll("input[type='text']")
var saveinfo = document.querySelector('#saveinfo')
var table = document.querySelector('#tbody')

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
    




saveinfo.addEventListener("click", save_function)