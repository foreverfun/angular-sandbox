// ANGULAR CLIENT SIDE
var newsApp = angular.module('newsApp', ['ngResource']);

// Data from server:
newsApp.factory('News', function($resource){
  // Define and return a resource connection
  var model $resource(
    '/api/news/:id',
    {id: '@_id'}
  );

  return {
    model: model,
    items: model.query()
  };
});

// List Controller:
newsApp.controller('listController', function($scope, News){
  // Stick the data directly into the $scope
  $scope.news = News.items();
});

// New Item Controller:
newsApp.controller('newItemController', function($scope, News){
  $scope.item = {};
  $scope.addItem = function(){
    var newItem = new News.model($scope.item);
    newItem.$save(function(savedItem){
      var modelItem = new News.model(savedItem);
      News.items.push(modelItem);
    });
  };
});

// News Item Directive:
newsApp.directive('newsitem', function(){
  return {
    restrict: 'E',
    templateUrl: '/templates/newsItem'
  };
});
