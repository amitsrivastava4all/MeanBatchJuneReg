app.controller('aboutctrl',function($scope,$routeParams){
    
$scope.msg = 'Params are '+$routeParams.name+' '+$routeParams.city;
})