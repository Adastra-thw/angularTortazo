angular.module('tortazoApp.controllers', []).
controller('scansController', function($scope, scansService) {
    /*$scope.scansList = [
      {
          id : 10,
          scandate : 'other'
      },
      {
          id : 11,
          scandate : 'another'
      }
    ];*/

    $scope.scansList = [];

    scansService.getScans().success(function (response) {
        $scope.scansList = response.results;
    });
}).
controller('relaysController', function($scope, scansService) {
    /*$scope.scansList = [
      {
          id : 10,
          scandate : 'other'
      },
      {
          id : 11,
          scandate : 'another'
      }
    ];*/

    $scope.relaysList = [];
    scansService.getRelays().success(function (response) {
        $scope.relaysList = response.results;
    });
});
