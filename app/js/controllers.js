angular.module('tortazoApp.controllers', []).
controller('scansController', function($scope, djangoTortazoService) {
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

    djangoTortazoService.getDrivers().success(function (response) {
        //Dig into the responde to get the relevant data
        console.log(response.results);
        $scope.scansList = response.results;
    });
});
