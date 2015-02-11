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

    $scope.checkAll = false;     
    $scope.checkAllInPages = {};

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
          $scope.checkAll = false;
          $scope.checkAllInPages = {}
          $scope.relaySelectedInPages = [];
          scansService.getRelays(scanId, $scope.currentPageRelays).success(function (response) {
              $scope.totalItemsRelays = response.count;
              $scope.relaysList = response.results;
              for (relay in $scope.relaysList) {
                $scope.relaysList[relay].checkedRelay = false;
              }
          });
    };

    $scope.verifySelectedRelays = function() {
        for (relay in $scope.relaysList) {
          $scope.relaysList[relay].checkedRelay = false;
          for(idRelaySelected in $scope.relaySelectedInPages) {
            if($scope.relaySelectedInPages[idRelaySelected] == $scope.relaysList[relay].id) {
              $scope.relaysList[relay].checkedRelay = true;                            
            }
          }          
        }
    }
        
    $scope.pageChangedRelays = function() {
      $scope.checkAll = $scope.checkAllInPages[$scope.currentPageRelays];
      scansService.getRelays($scope.scanIdSelected, $scope.currentPageRelays).success(function (response) {
        $scope.totalItemsRelays = response.count;
        $scope.relaysList = response.results;
          $scope.verifySelectedRelays();
      });
    };    

    $scope.verifyFlags = function() {
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
    }
    
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

    $scope.verifyFlags();
      /*
      for (relay in $scope.relaysList) {
        if($scope.relaysList[relay].checkedRelay == true) {
          console.log($scope.relaysList[relay]);
        }
      }
      */
    };

    $scope.checkRelaysInCurrentList = function() {
      if($scope.checkAll != $scope.checkAllInPages[$scope.currentPageRelays]) {
        $scope.checkAllInPages[$scope.currentPageRelays] = $scope.checkAll;
      //$scope.isGeolocateRelaysDisabled = !$scope.checkAll;
        for (relay in $scope.relaysList) {
          element = $scope.relaySelectedInPages.indexOf($scope.relaysList[relay].id);
          if(element == -1){
              $scope.relaysList[relay].checkedRelay = $scope.checkAll;
              $scope.relaySelectedInPages.push($scope.relaysList[relay].id);
          } else {
            $scope.relaySelectedInPages.splice(element, 1);
          }
        };
        $scope.verifySelectedRelays();
        $scope.verifyFlags();        
      }
      
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

tortazoControllers.controller('scansWizardController', function($scope,  $translate, scansService) {
  $scope.alerts = [];
  $scope.selectedSwitches = {};
  $scope.switches = [];
  $scope.commandToRun = "Tortazo.py ";
  $scope.switchValue = null;
  $scope.selectedSwitchValue = null;

  $scope.showSelect = false;
  $scope.showInput = false;
  $scope.showAddButton = false;  
  
  $scope.disabledRunButton=true;
  /*
  $scope.verbose = new Object();
  $scope.verbose.longSwitch='--verbose';
  $scope.verbose.helpSwitch="Verbose Mode.";
  $scope.switches.push($scope.verbose);

  $scope.generateSimpleReport = new Object();
  $scope.generateSimpleReport.longSwitch="--generate-simple-nmapreport";
  $scope.generateSimpleReport.helpSwitch="Generate a report for each exit relay analized with Nmap and Shodan (if you use the switches for shodan). The reports will be generated in your home directory.";
  $scope.switches.push($scope.generateSimpleReport);

  $scope.controllerPort = new Object();
  $scope.controllerPort.longSwitch='--controller-port';
  $scope.controllerPort.helpSwitch="Controller's port of the local instance of TOR. (Default=9151)";
  $scope.switches.push($scope.controllerPort);
  
  
  TODO: Shodan Support.
  $scope.shodanKey = new Object();
  $scope.shodanKey.longSwitch='--shodan-key';
  $scope.shodanKey.helpSwitch="Development Key to use Shodan API.";
  $scope.switches.push($scope.shodanKey);
  $scope.useShodan = new Object();
  $scope.useShodan.longSwitch='--use-shodan';
  $scope.useShodan.helpSwitch="Use ShodanHQ Service. (Specify -k/--shodan-key to set up the file where's stored your shodan key.)";
  $scope.switches.push($scope.useShodan);
  
  TODO: Start a new "Local tor instance from web"?
  $scope.useCircuitNodes = new Object();
  $scope.useCircuitNodes.longSwitch='--use-circuit-nodes';
  $scope.useCircuitNodes.helpSwitch="Use the exit nodes selected for a local instance of TOR.";
  $scope.switches.push($scope.useCircuitNodes);
  $scope.useLocalTorInstance = new Object();
  $scope.useLocalTorInstance.longSwitch='--use-localinstance';  
  $scope.useLocalTorInstance.helpSwitch="Use a local TOR instance started with the option -T/--tor-localinstance (Socks Proxy included) to execute requests from the plugins loaded. By default, if you don't start a TOR local instance and don't specify this option, the settings defined in 'config.py' will be used to perform requests to hidden services.";
  $scope.switches.push($scope.useLocalTorInstance);
  $scope.torLocalInstance = new Object();
  $scope.torLocalInstance.longSwitch="--tor-localinstance";
  $scope.torLocalInstance.helpSwitch='Start a new local TOR instance with the "torrc" file specified. DO NOT RUN TORTAZO WITH THIS OPTION AS ROOT!';
  $scope.switches.push($scope.torLocalInstance);
  */
  
  /*
  BOTNET OPTIONS.
  $scope.zombieMode = new Object();
  $scope.zombieMode.longSwitch='--zombie-mode';
  $scope.zombieMode.helpSwitch="This option reads the tortazo_botnet.bot file generated from previous successful attacks. With this option you can select the Nicknames that will be excluded. (Nicknames included in the tortazo_botnet.bot). For instance, '-z Nickname1,Nickname2' or '-z all' to include all nicknames.";
  $scope.switches.push($scope.zombieMode);

  $scope.openShell = new Object();
  $scope.openShell.longSwitch='--open-shell';
  $scope.openShell.helpSwitch="Open a shell on the specified host.";
  $scope.switches.push($scope.openShell);
  
  $scope.runCommandBotnet = new Object();
  $scope.runCommandBotnet.longSwitch='--run-command';
  $scope.runCommandBotnet.helpSwitch='Execute a command across the hosts of the botnet. Requieres the -z/--zombie-mode. example: --run-command "uname -a; uptime" ';
  $scope.switches.push($scope.runCommandBotnet);  
  */
  
  /**
  PLUGIN OPTIONS.
  $scope.listPlugins = new Object()
  $scope.listPlugins.longSwitch='--list-plugins';
  $scope.listPlugins.helpSwitch="List of plugins loaded.";
  $scope.switches.push($scope.listPlugins);  

  $scope.usePlugin = new Object()
  $scope.usePlugin.longSwitch='--use-plugin'; 
  $scope.usePlugin.helpSwitch='Execute a plugin. To see the available plugins, execute Tortazo with switch -L / --list-plugins';
  $scope.switches.push($scope.usePlugin);
  
  $scope.pluginArguments = new Object();
  $scope.pluginArguments.longSwitch='--plugin-arguments';
  $scope.pluginArguments.helpSwitch='Args to execute the specified plugin with the switch -P / --use-plugin. List of key/value pairs separated by colon. Example= nessusHost=127.0.0.1,nessusPort=8843,nessusUser=adastra,nessusPassword=adastra';
  $scope.switches.push($scope.pluginArguments);
  */
  
  /**
  ONION REPOSITORY OPTIONS.
  $scope.onionPartialAddress = new Object();
  $scope.onionPartialAddress.longSwitch="--onionpartial-address";
  $scope.onionPartialAddress.helpSwitch="Partial address of a hidden service. Used in Onion repository mode.";
  $scope.switches.push($scope.onionPartialAddress);
  
  $scope.onionRepositoryMode = new Object();
  $scope.onionRepositoryMode.longSwitch="--onion-repository";
  $scope.onionRepositoryMode.helpSwitch="Activate the Onion Repository mode and try to find hidden services in the TOR deep web.";
  $scope.switches.push($scope.onionRepositoryMode);
        
  $scope.workerThreadsRepository = new Object();
  $scope.workerThreadsRepository.longSwitch="--workers-repository";
  $scope.workerThreadsRepository.helpSwitch="Number of threads used to process the ONION addresses generated.";
  $scope.switches.push($scope.workerThreadsRepository);
  
  $scope.validCharsRepository = new Object();
  $scope.validCharsRepository.longSwitch="--validchars-repository";
  $scope.validCharsRepository.helpSwitch="Valid characters to use in the generation process of onion addresses. Default: All characters between a-z and digits between 2-7";
  $scope.switches.push($scope.validCharsRepository);
  */

  $scope.useMirrors = new Object();
  $scope.useMirrors.name="useMirrors";
  $scope.useMirrors.longSwitch='--use-mirrors';
  $scope.useMirrors.helpSwitch="Use the mirror directories of TOR. This will help to not overwhelm the official directories";
  $scope.useMirrors.alertMessage="Your scan will use the mirror directories intead the official authoritative directories. But don't worry it's OK too.";
  $scope.useMirrors.alertType="warning";
  $scope.useMirrors.maxValueRestriction=null;
  $scope.useMirrors.allowedValue="input";
  $scope.useMirrors.valued = false;
  $scope.switches.push($scope.useMirrors);
  
  $scope.mode = new Object();
  $scope.mode.name="mode";
  $scope.mode.longSwitch='--mode';
  $scope.mode.helpSwitch="Filter the platform of exit-nodes to attack.";
  $scope.mode.alertMessage="Your scan will be filtered by the operative system selected.";
  $scope.mode.alertType="success";
  $scope.mode.maxValueRestriction=null;
  $scope.mode.allowedValue=["windows", "linux", "darwin", "freebsd", "openbsd", "bitrig","netbsd"];
  $scope.mode.valued = true;
  $scope.switches.push($scope.mode);
  
  $scope.useDatabase = new Object();
  $scope.useDatabase.name="useDatabase";
  $scope.useDatabase.longSwitch='--use-database';
  $scope.useDatabase.helpSwitch="Tortazo will store the last results from the scanning process in a database. If you use this flag, Tortazo will omit the scan and just will try use the data stored from the last execution.";
  $scope.useDatabase.alertMessage="If you don't specify the switch '--scan-identifier', Tortazo will load the last 10 scans performed.";
  $scope.useDatabase.alertType="warning";
  $scope.useDatabase.maxValueRestriction=null;
  $scope.useDatabase.allowedValue="input";
  $scope.useDatabase.valued = false;
  $scope.switches.push($scope.useDatabase);
  
  /**
  Well, clean the scans performed before is not a good idea.
  $scope.cleanDatabase = new Object();
  $scope.cleanDatabase.longSwitch='--clean-database';
  $scope.cleanDatabase.helpSwitch="Tortazo will delete all records stored in database when finished executing. This option will delete every record stored, included the data from previous scans.";
  $scope.switches.push($scope.cleanDatabase);
  */

  $scope.serversToAttack = new Object();
  $scope.serversToAttack.name='serversToAttack';  
  $scope.serversToAttack.longSwitch='--servers-to-attack';  
  $scope.serversToAttack.helpSwitch="Number of TOR exit-nodes to attack. If this switch is used with --use-database, will recover information stored from the last 'n' scans. Default = 10";
  $scope.serversToAttack.alertMessage="In this version of Tortazo you can only scan the first 30 relays in the current consensus descriptor.";
  $scope.serversToAttack.alertType="warning";
  $scope.serversToAttack.maxValueRestriction=30;
  $scope.serversToAttack.allowedValue="input";
  $scope.serversToAttack.valued = true;
  $scope.switches.push($scope.serversToAttack);
  
  $scope.listScanPorts = new Object();
  $scope.listScanPorts.name='listScanPorts';  
  $scope.listScanPorts.longSwitch='--list-ports';
  $scope.listScanPorts.helpSwitch="Comma-separated List of ports to scan with Nmap. Don't use spaces";
  $scope.listScanPorts.alertMessage="Now, you'll overwritte the default list of ports to scan.";
  $scope.listScanPorts.alertType="success";
  $scope.listScanPorts.maxValueRestriction=null;
  $scope.listScanPorts.allowedValue="input";
  $scope.listScanPorts.valued = true;
  $scope.switches.push($scope.listScanPorts);
  
  $scope.excludeFingerprints = new Object();
  $scope.excludeFingerprints.name='excludeFingerprints';  
  $scope.excludeFingerprints.longSwitch='--exclude-fingerprints';
  $scope.excludeFingerprints.helpSwitch="Comma-separated List of fingerprints to exclude from the Tortazo scan. Don't use spaces";
  $scope.excludeFingerprints.alertMessage="Now, you'll exclude the selected fingerprints from your scan.";
  $scope.excludeFingerprints.alertType="success";
  $scope.excludeFingerprints.maxValueRestriction=null;
  $scope.excludeFingerprints.allowedValue="input";  
  $scope.excludeFingerprints.valued = true;
  $scope.switches.push($scope.excludeFingerprints);
  
  $scope.scanArguments = new Object();
  $scope.scanArguments.name='scanArguments';  
  $scope.scanArguments.longSwitch='--scan-arguments';
  $scope.scanArguments.helpSwitch='Arguments to Nmap. Use "" to specify the arguments. For example: "-sSV -A"';
  $scope.scanArguments.alertMessage="Now, you'll execute your scans using the NMap specified switches.";
  $scope.scanArguments.alertType="success";
  $scope.scanArguments.maxValueRestriction=null;
  $scope.scanArguments.allowedValue="input";  
  $scope.scanArguments.valued = true;
  $scope.switches.push($scope.scanArguments);
  
  $scope.exitNodeFingerprint = new Object();
  $scope.exitNodeFingerprint.name='exitNodeFingerprint';  
  $scope.exitNodeFingerprint.longSwitch='--exit-node-fingerprint';
  $scope.exitNodeFingerprint.helpSwitch="ExitNode's Fingerprint to attack.";
  $scope.exitNodeFingerprint.alertMessage="Now, you'll execute your scan against the specified fingerprint (if this is found in the current consensus descriptor).";
  $scope.exitNodeFingerprint.alertType="success";
  $scope.exitNodeFingerprint.maxValueRestriction=null;
  $scope.exitNodeFingerprint.allowedValue="input";  
  $scope.exitNodeFingerprint.valued = true;
  $scope.switches.push($scope.exitNodeFingerprint);
  
  $scope.scanIdentifier = new Object();
  $scope.scanIdentifier.name='scanIdentifier';  
  $scope.scanIdentifier.longSwitch="--scan-identifier";
  $scope.scanIdentifier.helpSwitch="scan identifier in the Scan table. Tortazo will use the relays related with the scan identifier specified with this option.";
  $scope.scanIdentifier.alertMessage="You'll need to apply the switch '--use-database' to process this switch. If you already added it, then it's Ok.";
  $scope.scanIdentifier.alertType="danger";
  $scope.scanIdentifier.maxValueRestriction=null;
  $scope.scanIdentifier.allowedValue="input";  
  $scope.scanIdentifier.valued = true;
  $scope.switches.push($scope.scanIdentifier);
  
  /**
  Starting the function logic.
  */

  $scope.loadInputType = function(selectedSwitch) {
    $scope.alerts = [];
    $scope.selectedSwitch = selectedSwitch;
    for(currentSwitch in $scope.switches) {
      if($scope.switches[currentSwitch].longSwitch == selectedSwitch.longSwitch) {
          if($scope.switches[currentSwitch].allowedValue == "input") {
            $scope.showSelect = false;
            $scope.showInput = true;
            $scope.showAddButton = true;
            $scope.alerts.push({type: 'success', msg: $scope.switches[currentSwitch].helpSwitch });
            break;
          }else{
            $scope.showInput = false;
            $scope.showSelect = true;
            $scope.showAddButton = true;
            $scope.values =  $scope.switches[currentSwitch].allowedValue;
            $scope.alerts.push({type: 'success', msg: $scope.switches[currentSwitch].helpSwitch });
            break;
          }
      }
    }
  }  
  
  $scope.setSelectedValue = function(selectedSwitchValue) {
    $scope.selectedSwitchValue = selectedSwitchValue;
  }
  
  $scope.runCommand = function() {
    hasMode = true;
    if($scope.selectedSwitches['mode'] === undefined) {
        hasMode = false;
    }
    if(hasMode == false) {
      $scope.alerts.push({type: 'danger', msg: "The switch -m/--mode is mandatory." });
      return
    }
    
    scansService.executeTortazoScan($scope.selectedSwitches).success(function (response) {
      console.log(response);
      $scope.executionResult = response.results;
      $scope.alerts.push({type: 'success', msg: "OK. "+$scope.executionResult });
    });
  }
    
  $scope.addSwitch = function(switchValue) {
    $scope.alerts = [];
    $scope.switchValue = switchValue;
    
    if($scope.selectedSwitch.allowedValue == "input" && $scope.selectedSwitch.valued && $scope.switchValue == null) {
      $scope.alerts.push({type: 'danger', msg: "The switch specified requieres a valid value. Please, enter it." });
      return;
    }
    if($scope.selectedSwitch.maxValueRestriction != null){
      if(isNaN($scope.switchValue) == false) {
        numValue = parseInt($scope.switchValue)
        if(numValue > $scope.selectedSwitch.maxValueRestriction) {
          $scope.alerts.push({type: 'danger', msg: $scope.selectedSwitch.maxValueRestriction+" is the max value for the specified switch." });
          return;  
        } 
      }else {
          $scope.alerts.push({type: 'danger', msg: "The switch specified requieres a numeric value. Please, enter it." });
          return;
      }
    }

    

    if($scope.switchValue != null &&  $scope.selectedSwitch.valued) {
      //Valued switch
      $scope.selectedSwitches[$scope.selectedSwitch.name] = {"switch":$scope.selectedSwitch.longSwitch, "value" : $scope.switchValue};
      $scope.alerts.push({type: $scope.selectedSwitch.alertType, msg: $scope.selectedSwitch.alertMessage });      
    } 
    if(!$scope.selectedSwitch.valued) {
      //Non-valued switch
      $scope.selectedSwitches[$scope.selectedSwitch.name] = {"switch":$scope.selectedSwitch.longSwitch, "value" : "None"};
      $scope.alerts.push({type: $scope.selectedSwitch.alertType, msg: $scope.selectedSwitch.alertMessage });      
    }
    if($scope.selectedSwitch.allowedValue != "input") {
      //Option value.
      if($scope.selectedSwitchValue != null) {
          $scope.selectedSwitches[$scope.selectedSwitch.name] = {"switch":$scope.selectedSwitch.longSwitch, "value" : $scope.selectedSwitchValue};
      } else {
          $scope.alerts.push({type: 'danger', msg: "Please, select a value." });
      }      
    }
    
    $scope.commandArguments = "";
    for(switchKey in $scope.selectedSwitches) {
      if($scope.selectedSwitches[switchKey].value == "None") {
        $scope.commandArguments += $scope.selectedSwitches[switchKey].switch+" ";
      }else{
        $scope.commandArguments += $scope.selectedSwitches[switchKey].switch+" "+$scope.selectedSwitches[switchKey].value+" ";
      }
    }
    $scope.commandToRun = "Tortazo.py "+$scope.commandArguments;
  }

  $scope.closeAlert = function(index) {
    $scope.alerts.slice(index, 1);
  }
});

tortazoControllers.controller('geoLocationController', function($scope, $rootScope, uiGmapGoogleMapApi, uiGmapLogger, geoLocationService, relaysService) {
    $scope.isCollapsedBasicInfo = true;
    $scope.isCollapsedPortsInfo = true;
    $scope.shodanSelectedRelay = null;
    $scope.showShodanInfo = false;
    $scope.showShodanBasicInfo = false;
    $scope.showShodanPorts = false;
      
      
    
    $scope.map = {
      center: {
        latitude: 1,
        longitude: -1
      },
      zoom: 3,
      bounds: {}
    };
    $scope.options = {
      scrollwheel: true
    };
    $scope.setSelectedRelays = function(selectedRelays) {
      $rootScope.selectedRelays = selectedRelays;
    }

  var onMarkerRelay = function (marker) {
    marker.showWindow = true;
    $scope.showShodanBasicInfo = false;
    $scope.showShodanPorts = false;
    $scope.$apply();
    //window.alert("Marker: lat: " + marker.latitude + ", lon: " + marker.longitude + " clicked!!" );
    relaysService.getRelay(marker.id).success( function (responseRelay) {
      for(mapRelay in responseRelay.results){
        $scope.selectedMapRelay = responseRelay.results[mapRelay];
      }
      

      geoLocationService.getShodanInformation($scope.selectedMapRelay.host).success( function (responseShodan) {
        if(responseShodan != null) {
          $scope.showShodanInfo = true;
          $scope.shodanSelectedRelay = new Object();
          if(responseShodan.error) {
            $scope.shodanSelectedRelay.error = responseShodan.error;
          } else {
            $scope.shodanSelectedRelay.city = responseShodan.city;
            $scope.shodanSelectedRelay.country_code = responseShodan.country_code3;
            $scope.shodanSelectedRelay.country_name = responseShodan.country_name;
            $scope.shodanSelectedRelay.ip_str = responseShodan.ip_str;
            $scope.shodanSelectedRelay.isp = responseShodan.isp;
            $scope.shodanSelectedRelay.last_update = responseShodan.last_update;
            $scope.shodanSelectedRelay.ports = responseShodan.ports;
            $scope.shodanSelectedRelay.hostnames = responseShodan.hostnames;
            $scope.showShodanBasicInfo = true;
            if(responseShodan.data && responseShodan.data.length > 0) {
              $scope.showShodanPorts = true;
            }
            $scope.shodanSelectedRelay.portsInfo = responseShodan.data;            
          }
        }
      });
    });
  };
  


    var createMarker = function(i, latitude, longitude) {
      idKey = "id";
      var marker = {
        latitude: latitude,
        longitude: longitude
      };
      marker[idKey] = i;
      marker.onClicked = function () {
        onMarkerRelay(marker);
      };

      return marker;
    };
    $scope.randomMarkers = [];
    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, function(nv, ov) {
      if (!ov.southwest && nv.southwest) {
        var markers = [];
        for (relay in $rootScope.selectedRelays) {
            geoLocationService.getReferences($rootScope.selectedRelays[relay]).success(function (response) {
                for(result in response.results) {
                    markers.push(createMarker(response.results[result].id,response.results[result].nodelatitute,response.results[result].nodelongitute));
                }
            });         
        }
        $scope.randomMarkers = markers;
      }
    }, true);
});

tortazoControllers.controller('onionRepoController', function($scope, onionRepoService) {
   $scope.incrementalList = [];
   $scope.responsesList = [];
   $scope.totalItemsRandom = 0;
   $scope.currentPageRandom = 1;

   $scope.totalItemsIncremental = 0;
   $scope.currentPageIncremental = 1;   
   
    //Number of items per page.
    $scope.itemsPerPage=10;
    
   $scope.pageChangedRandom= function() {
      onionRepoService.getResponses($scope.currentPageRandom).success(function (response) {
        $scope.totalItemsRandom = response.count;
        $scope.responsesList = response.results;
      });
    };    

   $scope.pageChangedIncremental = function() {
      onionRepoService.getOnionRepoIncremental($scope.currentPageIncremental).success(function (response) {
        $scope.totalItemsIncremental = response.count;
        $scope.incrementalList = response.results;
      });
    };    
    
   /**
    * Functions for "onionrepository.html"
    */
    onionRepoService.getOnionRepoIncremental($scope.currentPageIncremental).success(function (response) {
        $scope.incrementalList   = response.results;
    });

    onionRepoService.getResponses($scope.currentPageRandom).success(function (response) {
        $scope.responsesList = response.results;
    });

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