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

  

});