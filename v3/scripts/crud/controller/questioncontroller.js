// Button Click Attach
window.addEventListener('load',registerEvents);
function registerEvents(){
document.getElementById('add').addEventListener('click',addQuestion);
}
function addQuestion(){
    console.log("Add Question Call");
    var fieldsname = ['id','name'];
    var fieldsvalue = [];
    var index = 0;
    // Loop
    fieldvalue[index]= document.getElementById(fieldsname[index]).value;
   // var id = document.getElementById('id').value;
    //var name = document.getElementById('name').value;
}