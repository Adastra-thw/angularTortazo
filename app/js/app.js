var app = angular.module('tortazoApp', [
  'ngRoute',
  'gettext',
  'tortazoApp.controllers',
  'tortazoApp.ui',
  'tortazoApp.services'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/scans', {
            templateUrl: 'scans.html',
            controller: 'scansController'
        }).
        when('/onionrepo', {
            templateUrl: 'onionrepository.html',
            controller: 'onionRepoController'
        }).
        when('/botnet', {
            templateUrl: 'botnet.html',
            controller: 'botnetController'
        }).
        otherwise({
            redirectTo: '/'
      });
    }
    ]);