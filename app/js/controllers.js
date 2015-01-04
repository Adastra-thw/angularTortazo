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

bootstrapModule.controller('IndexController', function ($scope, $translate) {
  $scope.oneAtATime = true;
  $scope.isCollapsed = false;
  $scope.groups = [];
  $scope.basicInfo = [];

  $scope.loadCarousel = function() {
    $scope.slidesInterval = 3000;
    var slides = $scope.slides = [];
    
    $translate(['Carousel_Image1', 'Carousel_Image2', 'Carousel_Image3']).then(function (translations) {
      slides.push({
        image: 'img/carousel/tortazo_scan.png',
        text: translations.Carousel_Image1
      });

    slides.push({
        image: 'img/carousel/tortazo_onionrepo.png',
        text: translations.Carousel_Image2
      });

    slides.push({
        image: 'img/carousel/tortazo_plugins.png',
        text: translations.Carousel_Image3
      });
    });
  };

  $scope.loadMenus = function() {
    $scope.groups = [];
    $scope.basicInfo = [];
    $translate(['AccordionActions_GatherInformationHeader', 'AccordionActions_GatherInformationText']).then(function (translations) {
      var gatherInfo = {
                    title: translations.AccordionActions_GatherInformationHeader,
                    content: translations.AccordionActions_GatherInformationText,
                    urlLink: '/tortazoWeb/#scans',
                    textLink: translations.AccordionActions_GatherInformationHeader
      };
      $scope.groups.push(gatherInfo);
    });

    $translate(['AccordionActions_OnionRepositoryHeader', 'AccordionActions_OnionRepositoryText']).then(function (translations) {
      var onion = {
                    title: translations.AccordionActions_OnionRepositoryHeader,
                    content: translations.AccordionActions_OnionRepositoryText,
                    urlLink: '/tortazoWeb/#onionrepo',
                    textLink: translations.AccordionActions_OnionRepositoryHeader
      };
      $scope.groups.push(onion);
    });

    $translate(['AccordionActions_BotnetHeader', 'AccordionActions_BotnetText']).then(function (translations) {
      var botnet = {
                    title: translations.AccordionActions_BotnetHeader,
                    content: translations.AccordionActions_BotnetText,
                    urlLink: '/tortazoWeb/#botnet',
                    textLink: translations.AccordionActions_BotnetHeader
      };
      $scope.groups.push(botnet);
    });

    $translate(['AccordionActions_PluginsHeader', 'AccordionActions_PluginsText']).then(function (translations) {
      var plugins = {
                    title: translations.AccordionActions_PluginsHeader,
                    content: translations.AccordionActions_PluginsText,
                    urlLink: '/tortazoWeb/#botnet',
                    textLink: translations.AccordionActions_PluginsHeader
      };
      $scope.groups.push(plugins);
    });

    $translate(['AccordionInfo_AboutTortazoHeader', 'AccordionInfo_AboutTortazoText']).then(function (translations) {
      var about = {
                    title: translations.AccordionInfo_AboutTortazoHeader,
                    content: translations.AccordionInfo_AboutTortazoText,
                    urlLink: 'https://github.com/Adastra-thw/Tortazo/',
                    textLink: "GitHub"
      };
      $scope.basicInfo.push(about);
    });
    $translate(['AccordionInfo_InstallationSupportHeader', 'AccordionInfo_InstallationSupportText']).then(function (translations) {
      var installationSupport = {
                    title: translations.AccordionInfo_InstallationSupportHeader,
                    content: translations.AccordionInfo_InstallationSupportText,
                    urlLink: "http://tortazo.readthedocs.org/en/latest/",
                    textLink: "Read The Docs"
      };
      $scope.basicInfo.push(installationSupport);
    });  
    $translate(['AccordionInfo_EditionsHeader', 'AccordionInfo_EditionsText']).then(function (translations) {
      var editions = {
                    title: translations.AccordionInfo_EditionsHeader,
                    content: translations.AccordionInfo_EditionsText,
                    urlLink: '#',
                    textLink: translations.AccordionInfo_EditionsHeader
      };
      $scope.basicInfo.push(editions);
    });
    $translate(['AccordionInfo_HelpContactHeader', 'AccordionInfo_HelpContactText']).then(function (translations) {
      var help = {
                    title: translations.AccordionInfo_HelpContactHeader,
                    content: translations.AccordionInfo_HelpContactText,
                    urlLink: 'http://tortazo.readthedocs.org/en/latest/gentle_introduction.html?highlight=contact#contact',
                    textLink: translations.AccordionInfo_HelpContactHeader
      };
      $scope.basicInfo.push(help);
    });

    $translate(['AccordionInfo_FAQHeader', 'AccordionInfo_FAQText']).then(function (translations) {
      var help = {
                    title: translations.AccordionInfo_FAQHeader,
                    content: translations.AccordionInfo_FAQText,
                    urlLink: 'http://tortazo.readthedocs.org/en/latest/faqs.html',
                    textLink: translations.AccordionInfo_FAQHeader
      };
      $scope.basicInfo.push(help);
    });
  }

  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
    $scope.loadCarousel();
    $scope.loadMenus();
  };

  $scope.loadCarousel();
  $scope.loadMenus();

});

bootstrapModule.controller('MainModalController', function ($scope, $modal, $log) {
  $scope.open = function (size, modalType) {
    var modalInstance = $modal.open({
      templateUrl: 'templateModal.html',
      controller: 'templateModalController',
      size: size
    });
    modalInstance.modalType=modalType;
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