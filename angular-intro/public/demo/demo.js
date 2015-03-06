var myModule = angular.module('myModule', []);

// controllers
// $scope - dependency injection
myModule.controller('myController', function($scope){
  // console.log('Constroller is running!');
  // console.log($scope);

  $scope.name='Chris';
  
  $scope.user = {
    name: 'Chris',
    color: 'Blue'
  };

  // attach a method to our scope
  $scope.printName = function() {
    console.log('Name is:', $scope.name);
  };
});

myModule.controller('dataController', function($scope, myService, myFactory){
  console.log(myService, myFactory);
  $scope.service = myService;
  $scope.factory = myFactory;
});

// $scope
// controllers with dependency injection, minification safe
// myModule.controller('myController', ['$scope', function($scope){
//   console.log('Constroller is running!');
//   console.log($scope);
// }]);

// myModule.controller('myController', ['$scope', '$resource', function($scope, $resource){
//   console.log('Constroller is running!');
//   console.log($scope);
// }]);

// services and factories - share data between differnt controllers
// service
myModule.service('myService', function() {
  this.message = "Hello World, from service!";
}); 

// factory
myModule.factory('myFactory',function(){
  var message ="Hello World, from factory!";
  return {
    message:message
  };
});

// directives
myModule.directive('prime',function(){
  return {
    // E => element, A => attribue, C => class
    restrict: 'E',
    template: '<h1>Don\'t Mess with Other Civilizatins</h1>'
  };
});

// filters
myModule.filter('pigLatin', function(){
  return function(str) {
    var raw=str.split('');
    raw.push(raw.shift());
    return raw.join('') + "ay";
  };
});
