angular.module('shortly.shorten', [])
.factory('Links', function () {
  console.log('Links factory is go!');
  return 1;
})
.controller('ShortenController', function ($scope, $location) {
  // Your code here
  var urls = [];

  $scope.shorten = function(){
    urls.push($scope.url);
    console.log('Submitted url: ' + $scope.url, ' - Links = ' + urls);
    $scope.url = '';
  }
});
