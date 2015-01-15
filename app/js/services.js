var tortazoApp = angular.module('tortazoApp.services' , []);

tortazoApp.factory('scansService', function($http) {

    var apiScans = {};
    apiScans.getScans = function(page) {
      return $http({
        url: 'http://127.0.0.1:8000/scans?page='+page
      });
    }


    apiScans.getRelays = function(scanId, page) {
      return $http({
        url: 'http://127.0.0.1:8000/scan/torNodeData/?scanid='+scanId+"&page="+page
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




tortazoApp.factory('onionRepoService', function($http) {

    var apiBotnet = {};
    apiBotnet.getResponses = function() {
      return $http({
        url: 'http://127.0.0.1:8000/repository/responses/'
      });
    }

    apiBotnet.getOnionRepoIncremental = function(nickname) {
      return $http({
        url: 'http://127.0.0.1:8000/repository/incremental/'
      });
    }

    return apiBotnet;
  });