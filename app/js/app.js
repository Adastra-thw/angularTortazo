var en_Translation = {
  'Project_Title'    : 'Tortazo Project',
  'Project_SubTitle' : 'Audit and Attack framework for TOR',
  'Header1_Title' : 'Tortazo for Python Hackers!',
  'Header1_Text' : "Stem is a powerful library written in Python to perform various operations against TOR Clients and Directory Authorities. The information gathered using Stem could be very useful to an attacker to gather information about the relays available in the TOR network. Tortazo is an open source project to gather information about ExitNodes in the TOR Network, perform bruteforce attacks against services like FTP or SSH and create a Botnet with the compromised ExitNodes over SSH. Tortazo includes a lot of features in the plugins form to perform pentesting activities against TOR relays and hidden services in the deep web. In the documentation, you’ll see in detail all the features included in Tortazo. The main objetive of this project is establish a bridge between the TOR deep web and the Python hackers. Let’s run python scripts in the TOR's deep web!",
  'contact' : "Contact",
  'Check_Title' : "Check the functions of Tortazo!",
  'Anonymity_Menu' : "Anonymity",
  'About_Menu' : "About Tortazo"
}

var es_Translation = {
  'Project_Title' : 'Proyecto Tortazo',
  'Project_SubTitle' : 'Framework de auditoría y ataque para TOR',
  'Header1_Title' : 'Tortazo para Hackers de Python!',
  'Header1_Text' : "Stem es una potente librería escrita en Python para ejecutar varios tipos de operaciones contra clientes TOR y autoridades de directorio. La información recolectada utilizando Stem podría ser muy útil para un atacante a la hora de recolectar información sobre los repetidores disponibles en la red de TOR. Tortazo es un proyecto libre que permite recolectar información sobre los repetidores de salida en la red de TOR, ejecutar ataques de fuerza bruta contra servicios tales como FTP o SSH y crear una Botnet con los repetidores de salida comprometidos con SSH. Tortazo incluye varias funcionalidades en forma de plugins para ejecutar actividades de pentesting contra repetidores de TOR y servicios ocultos en la web profunda de TOR. In la documentación, podrás ver en detalle todas las caracteristicas incluidas en Tortazo. EL objetivo principal de este proyecto es el de establecer un puente entre los hackers de Python y la web profunda de TOR. Ejecuta scripts en Python en la web profunda de TOR.",
  'contact' : "Contacto",
  'Check_Title' : "Prueba las funcionalidades de Tortazo!",
  'Anonymity_Menu' : "Anonimato",
  'About_Menu' : "Sobre Tortazo"
}

var app = angular.module('tortazoApp', [
  'ngRoute',
  'tortazoApp.controllers',
  'tortazoApp.ui',
  'tortazoApp.services', 'pascalprecht.translate'
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
    $translateProvider.useCookieStorage();
    //$translateProvider.useLocalStorage();
    //$translateProvider.useLocalStorage();
    //$translateProvider.useCookieStorage();
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
        otherwise({
            redirectTo: '/'
      });
    }
    ]);