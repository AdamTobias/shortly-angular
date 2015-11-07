angular.module('shortly.shorten', [])
.controller('ShortenController', function ($scope, $location, linksStorage, $http) {
  // Your code here
  $scope.currentUrls = [];

  $scope.shorten = function () {
    $http({
      method: 'POST',
      url: '/api/links',
      headers: {'Content-Type': 'application/json'},
      data: { url: $scope.url }
    }).then(function (response) {
      linksStorage.push(response.data);
      $scope.currentUrls.push(response.data);
    });
    $scope.url = '';
  };

  $scope.linkClick = function (url) {
    console.dir(url);
    window.location.href = url.base_url + '/api/links/' + url.code;
  };
});
