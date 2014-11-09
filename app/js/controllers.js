var tortazoControllers = angular.module('tortazoApp.controllers', [])



tortazoControllers.controller('scansController', function($scope, scansService) {
    $scope.scansList = [];
    $scope.relaysList = [];
    /**

    * Functions for "scans.html"
    */
    scansService.getScans().success(function (response) {
        $scope.scansList = response.results;
    });

    $scope.functionLoadRelays = function(scanId) {
          scansService.getRelays(scanId).success(function (response) {
               $scope.relaysList = response.results;
          });
    };
})

tortazoControllers.controller('botnetController', function($scope, botnetService) {
   $scope.botsList = [];
   $scope.botLocations = [];
   /**
    * Functions for "botnet.html"
    */
    botnetService.getBots().success(function (response) {
        $scope.botsList  = response.results;
    });

    $scope.functionBotByNickName = function(nickName) {
        scansService.getBotByNickName(nickName).success(function (response) {
            $scope.botsList  = response.results;
        })
    };

    botnetService.getBotLocations().success(function (response) {
        $scope.botLocations  = response.results;
    });

})