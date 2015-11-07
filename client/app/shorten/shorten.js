angular.module('shortly.shorten', [])
.factory('Links', function () {
  console.log('Links factory is go!');
  return 1;
})
.controller('ShortenController', function ($scope, $location, linksStorage) {
  // Your code here
  var currentUrls = [];

  $scope.shorten = function () {
    linksStorage.push($scope.url);
    currentUrls.push($scope.url);
    console.log('Submitted url: ' + $scope.url);
    $scope.url = '';
  };
});
