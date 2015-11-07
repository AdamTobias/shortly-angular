angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http) {
  // Your code here
  $http({
      method: 'GET',
      url: '/api/links',
      headers: {'Content-Type': 'application/json'},
      data: {}
    }).then(function (response) {
      $scope.links = response.data;
      console.dir($scope.links);
    });

});
