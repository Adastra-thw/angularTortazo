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
    $scope.relaysList = [];

    scansService.getScans().success(function (response) {
        $scope.scansList = response.results;
    });

    $scope.loadRelays = function(scanId) {
      scansService.getRelays(scanId).success(function (response) {
      $scope.relaysList = response.results;
    });
    };

})