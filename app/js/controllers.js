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
          $scope.scanIdSelected = scanId
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

tortazoControllers.controller('onionRepoController', function($scope, onionRepoService) {
   $scope.incrementalList = [];
   $scope.responsesList = [];
   /**
    * Functions for "onionrepository.html"
    */
    onionRepoService.getOnionRepoIncremental().success(function (response) {
        $scope.incrementalList   = response.results;
    });

    onionRepoService.getResponses().success(function (response) {
        $scope.responsesList = response.results;
    });

});





//CONTROLLERS FOR THE VISUAL REPRESENTATION OF COMPONENTS.

bootstrapModule.controller('TortazoCarousel', function ($scope) {
  $scope.slidesInterval = 3000;
  var slides = $scope.slides = [];
  slides.push({
      image: 'img/carousel/tortazo_scan.png',
      text: 'Gather Information Mode  -  Gather information about the exit relays in the TOR network.'
    });

  slides.push({
      image: 'img/carousel/tortazo_onionrepo.png',
      text: 'Onion Repository Mode  -  Used to discover hidden services.'
    });

  slides.push({
      image: 'img/carousel/tortazo_plugins.png',
      text: 'Plugin architecture  -  Execute plugins from the interpreter to perform audits against hidden services in TOR.'
    });
});


bootstrapModule.controller('IndexAccordion', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Gather Information.',
      content: 'This is the simplest mode of execution in Tortazo. In this mode, Tortazo will perform an Nmap scan and the results for every exit node in the Directory Authorities or in the local TOR instance will be stored in the local database used by Tortazo.',
      urlLink: '/tortazoWeb/#scans',
      textLink: 'Check the gathered data in this Tortazo instance!'
    },
    {
      title: 'Onion Repository.',
      content: 'Tortazo will try to generate ONION addresses and then tests if the generated addresses point to a hidden service in the deep web',
      urlLink: '/tortazoWeb/#onionrepo',
      textLink: 'Check the Onion Repository data in this Tortazo instance!'
    },
    {
      title: 'Botnet Mode.',
      content: 'In this mode, Tortazo will read the file "TORTAZO_DIR/tortazo_botnet.bot" to create the bots in the context of the botnet. You can run parallel commands against the entirely botnet or exclude bots to run the commands just over some machines.',
      urlLink: '/tortazoWeb/#botnet',
      textLink: 'Check the botnet data in this Tortazo instance!'
    },
    {
      title: 'FAQ.',
      content: 'Run Tortazo, test it and if you have any doubt check the FAQs page.',
      urlLink: 'http://tortazo.readthedocs.org/en/latest/faqs.html',
      textLink: 'Check the FAQs!'
    }
  ];
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});

bootstrapModule.controller('MainModalController', function ($scope, $modal, $log) {
  $scope.open = function (size, modalType) {
    var modalInstance = $modal.open({
      templateUrl: 'templateModal.html',
      controller: 'templateModalController',
      size: size
    });
    modalInstance.modalType=modalType;

    /*modalInstance.result.then(function (selectedItem) {
      //$scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });*/
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

bootstrapModule.controller('templateModalController', function ($scope, $modalInstance) {
  $scope.modalType = $modalInstance.modalType;
  $scope.showAnonimityModal = false;
  $scope.showAboutTortazoModal = false;
  $scope.showDevelopmentModal = false;
  $scope.showDonateModal = false;
  $scope.showAnalizeModal = false;
  $scope.showGeolocateModal = false;
  $scope.showNewScanModal = false;
  
  /**
  TYPE      MODAL               VARIABLE
    -----main menu----
    1       Anonimity           showAnonimityModal      
    2       About Tortazo       showAboutTortazoModal   
    3       Development         showDevelopmentModal
    4       Donate              showDonateModal
    -----Scans----
    5       Analize             showAnalizeModal           
    6       Geolocate           showGeolocateModal
    7       New Scan            showNewScanModal
  */  
  if($scope.modalType == 1){
    $scope.showAnonimityModal = true;
  }
  if($scope.modalType == 2){
    $scope.showAboutTortazoModal = true;
  }
  if($scope.modalType == 3){
    $scope.showDevelopmentModal = true;
  }
  if($scope.modalType == 4){
    $scope.showDonateModal = true;
  }
  if($scope.modalType == 5){
    $scope.showAnalizeModal = true;
  }
  if($scope.modalType == 6){
    $scope.showGeolocateModal = true;
  }
  if($scope.modalType == 7){
    $scope.showNewScanModal = true;
  }
  
  

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

bootstrapModule.controller('MainMenuController', function ($scope, $modal, $log) {
  $scope.open = function (size, modalType) {
    var modalInstance = $modal.open({
      templateUrl: 'templateModal.html',
      controller: 'templateModalController',
      size: size
    });
    modalInstance.modalType=modalType;
  };
});

tortazoControllers.controller('LangController', ['$translate', '$scope', function ($translate, $scope) {  
    $scope.changeLanguage = function (langKey) {
      $scope.currentLang = langKey;
      $translate.use(langKey);
    };
}]);