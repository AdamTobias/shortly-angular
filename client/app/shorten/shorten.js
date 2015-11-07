angular.module('shortly.shorten', [])
.controller('ShortenController', function ($scope, $location, linksStorage) {
  // Your code here
  $scope.currentUrls = [];

  $scope.shorten = function () {
    linksStorage.push($scope.url);
    $scope.currentUrls.push($scope.url);
    console.log('Submitted url: ' + $scope.url);
    $scope.url = '';
  };
});
