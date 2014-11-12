var tortazoControllers = angular.module('tortazoApp.controllers', [])
var bootstrapModule = angular.module('tortazoApp.ui', ['ui.bootstrap']);


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

});




bootstrapModule.controller('AlertDemoCtrl', function ($scope) {
  $scope.alerts = [
    { type: 'danger', msg: 'Danger.' },
    { type: 'success', msg: 'Well done! ' }
  ];

  $scope.addAlert = function() {
    $scope.alerts.push({msg: 'Another alert!'});
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
});