angular.module('shortly.links', [])

.controller('LinksController', function ($scope, linksStorage) {
  // Your code here
  $scope.links = linksStorage;
});
