angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, $http, Auth) {
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

  $scope.logout = function () {
    Auth.signout();
  }

});
