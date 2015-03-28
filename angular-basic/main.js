var myModule = angular.module('basic', []);

// passing variable between view and controller via $scope
myModule.controller('variableCtrl', function($scope){
  $scope.name = "Chris";
});

// passing object between view and controller via $scope
myModule.controller('objectCtrl', function($scope){
  $scope.user = {
    name:"john",
    color:"blue"
  };
});

// passing method between view and controller via $scope
myModule.controller('methodCtrl', function($scope){
  $scope.alertMsg = function() {
    alert("alert message");
  }
  $scope.confirmMsg = function() {
    confirm("confirm message");
  }
});

// service - share data between controllers - myService and dataServiceCtrl
myModule.controller('dataServiceCtrl', function($scope, myService){
  $scope.service = myService;
});

myModule.service('myService', function() {
  // using this keyword
  this.message = "Message is from service!";
});

// factory - share data between controllers - myFactory and dataFactoryCtrl
myModule.controller('dataFactoryCtrl', function($scope, myFactory){
  $scope.factory = myFactory;
});

myModule.factory('myFactory', function(){
  //local variable message and return as an object
  var message = "Message is from factory!";
  return {
    message:message
  };
});

// share data between different controllers
myModule.controller('dataCtrl', function($scope, myService, myFactory){
  $scope.service = myService;
  $scope.factory = myFactory;
});

// directive
myModule.directive('directiveTest', function(){
  return {
    retrict: 'E',
    template: '<h3>This is a directive test</h3>'
  }
});

// filter
myModule.filter('filterTest', function(){
  return function(str) { 
    return str + "ing";
  }
});
