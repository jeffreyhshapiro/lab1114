var deleteButton = document.getElementsByClassName('deleteButton');
var addButton = document.getElementById('add-button').addEventListener("click", addRecord)

for (var i = 0; i < deleteButton.length; i++) {
  deleteButton[i].addEventListener("click", deleteRecord)
}

function deleteRecord() {
  this.parentElement.parentElement.remove();
}

function addRecord() {
  
}