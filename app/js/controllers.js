var tortazoControllers = angular.module('tortazoApp.controllers', [])
var bootstrapModule = angular.module('tortazoApp.ui', ['ui.bootstrap']);

tortazoControllers.controller('scansController', function($scope, scansService) {
    $scope.scansList = [];
    $scope.relaysList = [];
    $scope.selectedRelays = [];
    $scope.isCollapsedModes = true;
    $scope.isCollapsedPlugins = true;
    $scope.isCollapsedKiddies = true;
    $scope.relaySelected = null;
    $scope.relaySelectedInPages=[];

    $scope.isAnalizeRelayDisabled = true;
    $scope.isGeolocateRelaysDisabled = true;

    //Variables for Scans pagination.
    $scope.currentPageScans = 1;
    $scope.totalItemsScans = 0;

    //Variables for Relays pagination.
    $scope.currentPageRelays = 1;
    $scope.totalItemsRelays = 0;

    //Number of items per page.
    $scope.itemsPerPage=10;

    scansService.getScans($scope.currentPageScans).success(function (response) {
        $scope.totalItemsScans = response.count;
        $scope.scansList = response.results;
    });

    $scope.pageChangedScans = function() {
      scansService.getScans($scope.currentPageScans).success(function (response) {
        $scope.totalItemsScans = response.count;
        $scope.scansList = response.results;
      });
    };


    $scope.functionLoadRelays = function(scanId) {
          $scope.scanIdSelected = scanId
          $scope.currentPageRelays = 1;
          $scope.isAnalizeRelayDisabled = true;
          $scope.isGeolocateRelaysDisabled = true;          
          $scope.relaySelectedInPages = [];
          scansService.getRelays(scanId, $scope.currentPageRelays).success(function (response) {
              $scope.totalItemsRelays = response.count;
              $scope.relaysList = response.results;
              for (relay in $scope.relaysList) {
                $scope.relaysList[relay].checkedRelay = false;
              }
          });
    };

    $scope.pageChangedRelays = function() {
      scansService.getRelays($scope.scanIdSelected, $scope.currentPageRelays).success(function (response) {
        $scope.totalItemsRelays = response.count;
        $scope.relaysList = response.results;
        for (relay in $scope.relaysList) {
          $scope.relaysList[relay].checkedRelay = false;
          for(idRelaySelected in $scope.relaySelectedInPages) {
            if($scope.relaySelectedInPages[idRelaySelected] == $scope.relaysList[relay].id) {
              $scope.relaysList[relay].checkedRelay = true;                            
            }
          }          
        }
      });
    };    


    //Selection of relays.
    $scope.selectRelay = function() {
      itemsSelected = 0;
      for (relay in $scope.relaysList) {
        if($scope.relaysList[relay].checkedRelay == true) {
          if($scope.relaySelectedInPages.indexOf($scope.relaysList[relay].id) == -1){
            //console.log("ADD: "+$scope.relaysList[relay].id);
            $scope.relaySelectedInPages.push($scope.relaysList[relay].id);
          }
        } else {
          if($scope.relaySelectedInPages.indexOf($scope.relaysList[relay].id) != -1){
            index = $scope.relaySelectedInPages.indexOf($scope.relaysList[relay].id);
            if(index > -1){
              $scope.relaySelectedInPages.splice(index, 1);
              //console.log("REMOVE: "+$scope.relaysList[relay].id);
              //console.log($scope.relaySelectedInPages);
            }
          }
        }
      }


      if($scope.relaySelectedInPages.length == 1) {
        $scope.isAnalizeRelayDisabled = false;
        $scope.isGeolocateRelaysDisabled = false;
      }
      if($scope.relaySelectedInPages.length > 1) {
        $scope.isAnalizeRelayDisabled = true;
        $scope.isGeolocateRelaysDisabled = false;
      }  

      if($scope.relaySelectedInPages.length == 0) {
        $scope.isAnalizeRelayDisabled = true;
        $scope.isGeolocateRelaysDisabled = true;
      }  
      /*
      for (relay in $scope.relaysList) {
        if($scope.relaysList[relay].checkedRelay == true) {
          console.log($scope.relaysList[relay]);
        }
      }
      */
    };
   
});

tortazoControllers.controller('relaysController', function($scope, relaysService) {
    $scope.openList = [];
    $scope.closedList = [];
    $scope.filteredList = [];
    $scope.page_size = 50;

    $scope.setDetailRelay = function(relay) {
      $scope.relaySelected = relay;    
    }  
    

    $scope.loadOpenPorts = function(relayId) {    
          relaysService.getOpenPorts($scope.page_size, relayId).success(function (response) {
              $scope.totalItemsOpenPorts = response.count;
              $scope.openList = response.results;
          });
    };    


    $scope.loadClosedPorts = function(relayId) {        
          relaysService.getClosedPorts($scope.page_size, relayId).success(function (response) {
              $scope.totalItemsClosedPorts = response.count;
              $scope.closedList = response.results;
          });
    };   

    $scope.loadFilteredPorts = function(relayId) {  
          relaysService.getFilteredPorts($scope.page_size, relayId).success(function (response) {
              $scope.totalItemsFilteredPorts = response.count;
              $scope.filteredList = response.results;
          });
    };  
    $scope.loadPorts = function(relaySelected) {
      $scope.relayIdSelected = relaySelected;
      $scope.loadOpenPorts(relaySelected);
      $scope.loadClosedPorts(relaySelected);
      $scope.loadFilteredPorts(relaySelected);
    }
});

//tortazoControllers.controller("geoLocationController", function($scope, uiGmapGoogleMapApi, geoLocationService) {
    /*$scope.map = { center: { latitude: 1, longitude: -1 }, zoom: 2, options: {mapTypeId : google.maps.MapTypeId.SATELLITE }, markers: [] };
    $scope.references = [];
    $scope.loadGeoReferences = function(relaysSelected) {
      for(nodeId in relaysSelected) {
        geoLocationService.getReferences(relaysSelected[nodeId]).success(function (response) {
            for(result in response.results) {
              console.log(response.results[result].nodelatitute);
              console.log(response.results[result].nodelongitute);
              var reference = {
                latitude: response.results[result].nodelatitute,
                longitude: response.results[result].nodelongitute,
                id : result.id
              }
              $scope.references.push(reference);
            }           
        });
      }
    }*/
    
    /*var ret2 = {
        latitude: 90,
        longitude: 40,
        id : 1};
    $scope.map.markers.push(ret2);

        /*console.log(response);
        for(result in response.results) {
          console.log(result);
          $scope.references['latitude'] = result.nodelatitude;
          $scope.references['longitude'] = result.nodelongitude;
        }*/

      //alert($scope.references);
    
//});

tortazoControllers.controller('geoLocationController', function($scope, $rootScope) {
    $scope.map = {
      center: {
        latitude: 1,
        longitude: -1
      },
      zoom: 2,
      bounds: {}
    };
    $scope.options = {
      scrollwheel: false,
      mapTypeId : google.maps.MapTypeId.SATELLITE 
    };
    $scope.setSelectedRelays = function(selectedRelays) {
      console.log("setSelectedRelays");
      console.log(selectedRelays);
      console.log($rootScope);
      $rootScope.selectedRelays = selectedRelays;
      console.log($rootScope.selectedRelays);
    }
    var createRandomMarker = function(i, latitude, longitude) {
      console.log("createRandomMarker");
      idKey = "id";
      console.log(i);
      console.log(latitude);
      console.log(longitude);
      var ret = {
        latitude: latitude,
        longitude: longitude,
        title: 'm' + i
      };
      ret[idKey] = i;
      return ret;
    };
    $scope.randomMarkers = [];
    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, function(nv, ov) {
      if (!ov.southwest && nv.southwest) {
        var markers = [];
        console.log("func!");
        console.log($rootScope.selectedRelays);
        for (relay in $rootScope.selectedRelays) {
          console.log($rootScope.selectedRelays[relay].nodelatitute, $rootScope.selectedRelays[relay].nodelongitude);
          markers.push(createRandomMarker(relay, $rootScope.selectedRelays[relay].nodelatitute, $rootScope.selectedRelays[relay].nodelongitude));
        }
        $scope.randomMarkers = markers;
      }
    }, true);
  });

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

tortazoControllers.controller('pluginsController', function($scope, pluginsService) {

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
                    urlLink: '/tortazoWeb/#plugins',
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
  $scope.open = function (size, modalType, trace, sharedParameter) {
    var modalInstance = $modal.open({
      templateUrl: 'templateModal.html',
      controller: 'templateModalController',
      windowClass: size
    });
    modalInstance.modalType=modalType;
    modalInstance.trace=trace;
    //sharedParameter is used to pass parameters (any kind of object) to the modal that will be opened.
    modalInstance.sharedParameter=sharedParameter;
  };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

bootstrapModule.controller('templateModalController', function ($scope, $modalInstance, $translate) {
  $scope.modalType = $modalInstance.modalType;
  $scope.trace = $modalInstance.trace;
  $scope.sharedParameter = $modalInstance.sharedParameter;
  $scope.showAnonimityModal = false;
  $scope.showAboutTortazoModal = false;
  $scope.showDevelopmentModal = false;
  $scope.showDonateModal = false;
  $scope.showAnalizeModal = false;
  $scope.showGeolocateModal = false;
  $scope.showNewScanModal = false;
  
  $translate([$modalInstance.trace]).then(function (translations) {
      $scope.trace = translations[$modalInstance.trace];
    });

  
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
    -----Menu----
    8       Help Menu           showHelpMenuModal
    9       PRO Edition         showProEditionMenuModal    
    -----Others----
    10      Detail Relay        showDetailRelayModal
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
  if($scope.modalType == 8){
    $scope.showHelpMenuModal = true;
  }
  if($scope.modalType == 9){
    $scope.showProEditionMenuModal = true;
  }  
  if($scope.modalType == 10){
    $scope.showDetailRelayModal = true;
  }  
  
  

  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

/*bootstrapModule.controller('MainMenuController', function ($scope, $modal, $log) {
  $scope.open = function (size, modalType) {
    var modalInstance = $modal.open({
      templateUrl: 'templateModal.html',
      controller: 'templateModalController',
      size: size
    });
    modalInstance.modalType=modalType;
  };
});*/