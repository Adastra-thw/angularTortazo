var tortazoApp = angular.module('tortazoApp.services' , []);

tortazoApp.factory('scansService', function($http) {

    var apiScans = {};
    apiScans.getScans = function(page) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/scans/?page='+page
      });
    }


    apiScans.getRelays = function(scanId, page) {
      return $http({url: 'http://tortazo-community-devel-adastra.c9.io/scan/torNodeData/?scanid='+scanId+"&page="+page});
    }
    return apiScans;
})

tortazoApp.factory('relaysService', function($http) {

    var apiRelays = {};
    apiRelays.getOpenPorts = function(page_size, relayId) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/scan/torNodePort/?page_size='+page_size+'&tortazonode='+relayId+'&state=open'
      });      
    }


    apiRelays.getClosedPorts = function(page_size, relayId) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/scan/torNodePort/?page_size='+page_size+'&tortazonode='+relayId+'&state=closed'
      });
    }

    apiRelays.getFilteredPorts = function(page_size, relayId) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/scan/torNodePort/?page_size='+page_size+'&tortazonode='+relayId+'&state=filtered'
      });
    }    

    apiRelays.getRelay = function(relayId) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/scan/torNodeData/?id='+relayId
      });
    }

    return apiRelays;
})

tortazoApp.factory('geoLocationService', function($http) {

    var apiGeoLocation = {};
    apiGeoLocation.getReferences = function(nodeId) {
      return $http({url: 'http://tortazo-community-devel-adastra.c9.io/scan/geolocation/?nodeid='+nodeId});      
    }

    apiGeoLocation.getShodanInformation = function(address) {
      return $http({url: 'http://tortazo-community-devel-adastra.c9.io/scan/shodanReference/?address='+address});      
    }

    return apiGeoLocation;
})


tortazoApp.factory('botnetService', function($http) {

    var apiBotnet = {};
    apiBotnet.getBots = function() {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/botnet/bots/'
      });
    }

    apiBotnet.getBotByNickName = function(nickname) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/botnet/bots/?nickname='+nickname
      });
    }

    apiBotnet.getBotLocations = function(nickname) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/botnet/locations/'
      });
    }

    return apiBotnet;
  });




tortazoApp.factory('onionRepoService', function($http) {

    var apiBotnet = {};
    apiBotnet.getResponses = function(page) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/repository/responses/?page='+page
      });
    }

    apiBotnet.getOnionRepoIncremental = function(page) {
      return $http({
        url: 'http://tortazo-community-devel-adastra.c9.io/repository/incremental/?page='+page
      });
    }

    return apiBotnet;
  });