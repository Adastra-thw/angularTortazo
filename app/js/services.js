angular.module('tortazoApp.services', []).
  factory('djangoTortazoService', function($http) {

    var djangoTortazoAPI = {};
    djangoTortazoAPI.getDrivers = function() {
      return $http({
        url: 'http://127.0.0.1:8000/scans'
      });
    }

    return djangoTortazoAPI;
  });