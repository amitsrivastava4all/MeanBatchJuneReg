// Button Click Attach
window.addEventListener('load',init);
var countDown;
const printCounter=()=>
    document.querySelector('#id').innerText = countDown.next().value;
    // document.querySelector('#id').innerHTML = "<b>"+countDown.next().value+"</b>";

function toggleRed(){
    var id = this.getAttribute('qid');
console.log("Toggle Red Call ",this, 'Id is ',id);

var tr = this.parentNode.parentNode;
tr.classList.toggle('alert-danger');
questionOperations.toggleMark(id);
updateCount();
//tr.className = 'alert-danger';
}
function edit(){
console.log("Edit Call");
}
function saveToServer(){
    var lastAdded = questionOperations.questions[questionOperations.questions.length-1];
    var id = lastAdded.id;
var promise = firebase.database().ref('/questions/'+id).set(lastAdded);
promise.then(data=>{
    alert("Record Saved in DB");
}).catch(err=>{
    alert("Error During DB Add");
    console.log("Error in FB ",err);
})
}
const showHide=()=>
    document.querySelector("#sbox").classList.toggle('searchbox');

function init(){
    countDown = autoGen();
    printCounter();
    updateCount();
    registerEvents();
    showHide();
}
function printQuestions(questions){
    document.querySelector('#questions').innerHTML = '';
    questions.forEach(printQuestion);
    updateCount();
}



function deleteQuestion(){
    questionOperations.remove();
    printQuestions(questionOperations.questions);
}
function searchIt(){
    var val = document.querySelector('#searchValue').value;
    var key = document.querySelector('#searchby').value;
    if(key!='-1'){
            var subArr = questionOperations.search(key,val);
            printQuestions(subArr);
    }
}
function load(){
    if(localStorage){
        if(localStorage.questions){
            questionOperations.questions = JSON.parse(localStorage.questions);
            printQuestions(questionOperations.questions);
            updateCount();
        }
        else{
            alert("No Data Exist to Load");
        }
    }
    else{
        alert("Ur Browser is Outdated");
    }
}
function save(){
    if(localStorage){
       localStorage.questions=JSON.stringify(questionOperations.questions);
       alert("Record Saved");
    }
    else{
        alert("Ur Browser is Outdated");
    }
}
function fetchFromServer(){
    // single record
    //firebase.database().ref('/questions/100')
    // all 
    var questions= firebase.database().ref('/questions');
    questions.on('value',(snapshot)=>{
        var allQuestionsObj = snapshot.val();
        for(let key in allQuestionsObj){
            let questionObj = allQuestionsObj[key];
            questionOperations.add(questionObj);
        }
        printQuestions(questionOperations.questions);
        updateCount();
    })

}
function registerEvents(){
    
    document.querySelector('#fetchserver').addEventListener('click',fetchFromServer);
    document.querySelector('#savetoserver').addEventListener('click',saveToServer);
    document.querySelector('#load').addEventListener('click',load);
    document.querySelector('#save').addEventListener('click',save);
    document.querySelector('#searchValue').addEventListener('change',searchIt);
    document.getElementById('search').addEventListener('click',showHide);
    document.getElementById('delete').addEventListener('click',deleteQuestion);
document.getElementById('add').addEventListener('click',addQuestion);
}
function createIcon(className,fn,id){
    var icon = document.createElement("i");
    icon.className=className;
    
    icon.setAttribute("qid",id);
    icon.addEventListener("click",fn);
    return icon;
    // <i class="fas fa-trash"></i>
}
function updateCount(){
    document.querySelector('#total').innerText = questionOperations.questions.length;
    document.querySelector('#mark').innerText = questionOperations.countMark();
    document.querySelector('#unmark').innerText = questionOperations.questions.length-questionOperations.countMark();
}
function printQuestion(questionObject){
    var tbody = document.querySelector('#questions');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){
        if(key=='markForDelete'){
            continue;
        }
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
       
    }  // loop ends
    var td = tr.insertCell(index);
    td.appendChild(createIcon('fas fa-trash mr-2 hand',toggleRed,questionObject.id));
    
    td.appendChild(createIcon('fas fa-edit hand',edit,questionObject.id));
}
function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
        if(key=='markForDelete'){
            continue;
        }
        if(key=='id'){
            questionObject[key]= document.getElementById(key).innerText;
            continue;
        }
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
    printCounter();

    // console.log("Add Question Call");
    // var fieldsname = ['id','name']; //keys
    // var fieldsvalue = []; //values
    // var index = 0;
    // // Loop
    // fieldvalue[index]= document.getElementById(fieldsname[index]).value;
   // var id = document.getElementById('id').value;
    //var name = document.getElementById('name').value;
}