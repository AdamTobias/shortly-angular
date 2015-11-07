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

  $scope.linkClick = function (url) {
    console.dir(url);
    window.location.href = url.base_url + '/api/links/' + url.code;
  };

  $scope.linksFilterFunction = function (filterInput) {
    if(!$scope.linksFilter){
      return true;
    }
    return filterInput.url.toLowerCase().indexOf($scope.linksFilter.toLowerCase()) !== -1 ||
           filterInput.title.toLowerCase().indexOf($scope.linksFilter.toLowerCase()) !== -1;
  };

  $scope.logout = function () {
    Auth.signout();
  }

});
