var tortazoApp = angular.module('tortazoApp.services' , []);

tortazoApp.factory('scansService', function($http) {

    var apiScans = {};
    apiScans.getScans = function() {
      return $http({
        url: 'http://127.0.0.1:8000/scans'
      });
    }


    apiScans.getRelays = function(scanId) {
      return $http({
        url: 'http://127.0.0.1:8000/scan/torNodeData/?scanid='+scanId
      });
    }
    return apiScans;
})

tortazoApp.factory('botnetService', function($http) {

    var apiBotnet = {};
    apiBotnet.getBots = function() {
      return $http({
        url: 'http://127.0.0.1:8000/botnet/bots/'
      });
    }

    apiBotnet.getBotByNickName = function(nickname) {
      return $http({
        url: 'http://127.0.0.1:8000/botnet/bots/?nickname='+nickname
      });
    }

    apiBotnet.getBotLocations = function(nickname) {
      return $http({
        url: 'http://127.0.0.1:8000/botnet/locations/'
      });
    }

    return apiBotnet;
  });
