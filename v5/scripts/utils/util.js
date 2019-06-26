function* autoGen(){
    var counter = 100;
    while(true){
        yield counter;
        counter++;
    }
}