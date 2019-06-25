// Button Click Attach
window.addEventListener('load',init);
function init(){
    updateCount();
    registerEvents();
}
function registerEvents(){
document.getElementById('add').addEventListener('click',addQuestion);
}
function updateCount(){
    document.querySelector('#total').innerText = questionOperations.questions.length;
}
function printQuestion(questionObject){
    var tbody = document.querySelector('#questions');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){
        if(key =='options'){
            let options = questionObject[key];
            for(let option of options){
                tr.insertCell(index).innerText = option;
                index++;
            }
            continue;
        }
        tr.insertCell(index).innerText =  questionObject[key];
        index++;
       
    }
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        if(key=='options'){
            let options = [];
            for(let i = 1; i<=4;i++){
                options.push(document.getElementById('option'+i).value);
            }
            questionObject[key] = options;
            continue;
        }
        questionObject[key]= document.getElementById(key).value;
    }
    questionOperations.add(questionObject);
    printQuestion(questionObject);
    updateCount();

    // console.log("Add Question Call");
    // var fieldsname = ['id','name']; //keys
    // var fieldsvalue = []; //values
    // var index = 0;
    // // Loop
    // fieldvalue[index]= document.getElementById(fieldsname[index]).value;
   // var id = document.getElementById('id').value;
    //var name = document.getElementById('name').value;
}