angular.module('tortazoApp.services', []).
  factory('scansService', function($http) {

    var djangoTortazoAPI = {};
    djangoTortazoAPI.getScans = function() {
      return $http({
        url: 'http://127.0.0.1:8000/scans'
      });
    }


    djangoTortazoAPI.getRelays = function(scanId) {
      return $http({
        url: 'http://127.0.0.1:8000/scan/torNodeData/?scanid='+scanId
      });
    }


    return djangoTortazoAPI;
  });
