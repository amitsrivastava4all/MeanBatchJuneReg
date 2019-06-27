// CRUD
const questionOperations = {
    questions:[],
    add(questionObject){
      
        this.questions.push(questionObject);
        console.log("Added ",this.questions);
        //return question;
    },
    countMark(){
        return this.questions.filter(question=>question.markForDelete).length;
    },
    toggleMark(id){
        var questionObject = this.questions.find(question=>question.id==id);
        questionObject.markForDelete = !questionObject.markForDelete;
    },
    remove(){
       this.questions =  this.questions.filter(question=>!question.markForDelete);
    },
    search(key,value){
        console.log('********Value is ',value);
        if(!value){
            return this.questions;
        }
       return  this.questions.filter(question=>question[key]==value);
    },
    sort(){
    
    }
}
