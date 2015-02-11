var app = angular.module('tortazoApp', [
  'ngRoute',
  'ngCookies',
  'mgcrea.ngStrap', 
  'mgcrea.ngStrap.aside', 
  'mgcrea.ngStrap.tooltip',
  'mgcrea.ngStrap.popover',
  'tortazoApp.controllers',
  'tortazoApp.ui',
  'tortazoApp.services', 'pascalprecht.translate',
  "uiGmapgoogle-maps"
]);

app.config(['$translateProvider', 
  function ($translateProvider) {
    $translateProvider.translations('en', en_Translation);     
    $translateProvider.translations('es', es_Translation);   
    $translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
        'en_US': 'en',
        'en_UK': 'en',
        'es_ES': 'es',
        'es_MX': 'es'
    }) 
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLocalStorage();    
  }]);

app.config(['$routeProvider', '$translateProvider', 
    function ($routeProvider, $translateProvider) {
        //lan = $translateProvider.proposedLanguage();
        $routeProvider.when('/scans', {
            templateUrl: 'scans.html',
            controller: 'scansController',
            animation: 'slide'

        }).
        when('/onionrepo', {
            templateUrl: 'onionrepository.html',
            controller: 'onionRepoController'
        }).
        when('/botnet', {
            templateUrl: 'botnet.html',
            controller: 'botnetController'
        }).
        when('/plugins', {
            templateUrl: 'plugins.html',
            controller: 'pluginsController'
        }).
        otherwise({
            redirectTo: '/'
      });
    }
    ]);

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
})