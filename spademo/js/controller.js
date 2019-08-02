app.controller("calcctrl",($scope,calcfactory)=>{
    console.log("Controller Loaded");
    $scope.counter = 1;
    $scope.call = (count)=>{
        console.log('Count is ',count);
        $scope.counter= $scope.counter + count;
    }
    $scope.result = 0;
    $scope.data = [];
    $scope.ajax = ()=>{
        var promise = calcfactory.doAjax();
        promise.then(data=>{
            $scope.data = data.data.mobiles;
        },(err)=>{
            $scope.err = err;
        });
    }
    $scope.ajax();
$scope.add=()=>{
    console.log('Add Call');
    //$scope.result =calcfactory.add($scope.first,$scope.second);
}
})