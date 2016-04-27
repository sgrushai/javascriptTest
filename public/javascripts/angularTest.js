var myApp = angular.module('myApp',['myApp.directives']);

myApp.directives = angular.module('myApp.directives', []);
var alertHandler = () => {
    alert('Hello!');
}
myApp.controller('test1Controller', ['$scope', function($scope) {
  $scope.color = 'green';



  $scope.items = [
  	{id: 1, name:'John'},
  	{id: 2, name:'Piter'},
  	{id: 3, name:'Mike', inactive: true},
  	{id: 5, name:'Herman'},
  	{id: 6, name:'Nick', inactive: true}
  ]
}]);