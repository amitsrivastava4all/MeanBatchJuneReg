app.factory("calcfactory",($http,$q, PRODUCTURL)=>{
    console.log("Factory Loaded");
    var obj = {
        doAjax(){
            let defer  = $q.defer();
    $http.get(PRODUCTURL).then((data)=>{
        defer.resolve(data);
    },(err)=>{
        defer.reject(err);
    });
    return defer.promise;
}
}
return obj;

    // fetch('./api/some.json').then(
    // const obj =  {
    //     add(firstNumber, secondNumber){
    //         return parseInt(firstNumber) + parseInt(secondNumber);
    //     }
    // }
    // console.log("Factory Return Object ",obj);
    // return obj;

});