var inputs = document.querySelectorAll("input[type='text']");
var saveinfo = document.querySelector('#saveinfo');
var table = document.querySelector('#tbody');

saveinfo.addEventListener("click", save_function);

function save_function() {
    var tr = document.createElement("tr");
    var dataTd = document.createElement("td");
    var actionTd = document.createElement("td");
    var deleteButton = document.createElement("button");

    inputs.forEach(function (node) {
        var inputData = node.value;
        dataTd.textContent += inputData + " ";
    });

    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", removeItem);

    actionTd.appendChild(deleteButton);
    tr.appendChild(dataTd);
    tr.appendChild(actionTd);
    
    table.appendChild(tr);

    // Clear input fields
    inputs.forEach(function (node) {
        node.value = '';
    });
}

function removeItem() {
    this.parentNode.parentNode.remove();
}