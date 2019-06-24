// CRUD
const questionOperations = {
    questions:[],
    add(id, name, options, rans, score){
       var question = new Question(id,name, options,rans,score);      
        this.questions.push(question);
        return question;
    },
    remove(){
    
    },
    search(){
    
    },
    sort(){
    
    }
}
