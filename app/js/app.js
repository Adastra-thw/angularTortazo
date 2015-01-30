var en_Translation = {
  'PageTitle' : 'Tortazo Web Interface - build v1.2',
  'Project_Title'    : 'Tortazo Project',
  'Project_SubTitle' : 'Audit and Attack framework for TOR',
  'Header1_Title' : 'Tortazo for Python Hackers!',
  'contact' : "Contact",

  'Carousel_Image1':"Gather Information Mode  -  Gather information about the exit relays in the TOR network.",
  'Carousel_Image2':"Onion Repository Mode  -  Used to discover hidden services.",
  'Carousel_Image3':"Plugin architecture  -  Execute plugins from the interpreter to perform audits against hidden services in TOR.",  

  'AccordionInfo_AboutTortazoHeader' : "About Tortazo", 
  'AccordionInfo_InstallationSupportHeader' : "Installation/Support", 
  'AccordionInfo_EditionsHeader' : "Editions", 
  'AccordionInfo_HelpContactHeader' : "Help/Contact", 
  'AccordionInfo_FAQHeader' : "FAQs", 
  'AccordionInfo_AboutTortazoText' : "Stem is a powerful library written in Python to perform various operations against TOR Clients and Directory Authorities. Tortazo is an open source project to gather information about ExitNodes in the TOR Network, perform bruteforce attacks against services like FTP or SSH and create a Botnet with the compromised ExitNodes over SSH. Tortazo includes a lot of features in the plugins form to perform pentesting activities against TOR relays and hidden services in the deep web. In the documentation, you’ll see in detail all the features included in Tortazo. The main objetive of this project is establish a bridge between the TOR deep web and the Python hackers. Let’s run python scripts in the TOR's deep web!", 
  'AccordionInfo_InstallationSupportText' : "Tortazo is 'anti-script kiddies' and is not a 'one-click-hack' tool. There's a lot of dependencies and settings that you must know, but if you're a python hacker, with motivation needed, you'll read the docs and will use the framework properly", 
  'AccordionInfo_EditionsText' : "There are currently two editions of Tortazo: Community and Professional edition. The Community version is free and can be used without restriction, however in the Professional version there are several interesting extensions that are only available for those who have a valid product code",   
  'AccordionInfo_HelpContactText' : "If you need to contact: ", 
  'AccordionInfo_FAQText' : "Run Tortazo, test it and if you have any doubt check the FAQs page.", 

  'AccordionActions_GatherInformationHeader' : "Gather Information",
  'AccordionActions_OnionRepositoryHeader' : "Onion Repository",
  'AccordionActions_BotnetHeader' : "Botnet Mode",
  'AccordionActions_PluginsHeader' : "Plugins",
  'AccordionActions_GatherInformationText' : "This is the simplest mode of execution in Tortazo. In this mode, Tortazo will perform an Nmap scan and the results for every exit node in the Directory Authorities or in the local TOR instance will be stored in the local database used by Tortazo.",
  'AccordionActions_OnionRepositoryText' : "Tortazo will try to generate ONION addresses and then tests if the generated addresses point to a hidden service in the deep web",
  'AccordionActions_BotnetText' : 'In this mode, Tortazo will read the file "TORTAZO_DIR/tortazo_botnet.bot" to create the bots in the context of the botnet. You can run parallel commands against the entirely botnet or exclude bots to run the commands just over some machines.',
  'AccordionActions_PluginsText' : "In this mode you can run the plugins available in Tortazo against relays and hidden services in TOR.",

  'Check_Title' : "Check the functions of Tortazo!",
  'Anonymity_Menu' : "Anonymity",
  'About_Menu' : "About Tortazo",
  'Development_Menu' : "Development",
  'Donate_Menu' : "Donate!",
  'Scans_Menu' : "Scans",
  'OnionRepo_Menu' : "Onion Repository",
  'Botnet_Menu' : "Botnet",
  'Plugins_Menu' : "Plugins",
  'TORState_Menu' : "Current state of TOR Network (Exit Nodes)",
  'Help_Menu' : "Help",
  'PRO_Menu' : "Get PRO version",

  'Help_Text' : "If you have any questions or problems running Tortazo, please read the official documentation. If no answer to your problems in the documentation, please read the FAQs. If you don't get to solve it using the FAQs, you can contact me.",  
  'PRO_Text' : 'The community edition contains basic functions for "Smack", but the professional version contains features that are strictly professional use and not available to the general public. Please contact us for more information about purchasing the professional version of the tool.',

  'Ok_Button' : 'Ok',
  'Cancel_Button' : 'Cancel', 
  'Analize_Button' : 'Analize', 
  'GeolocateRelays_Button' : 'Geolocate selected relays', 
  'NewScan_Button' : 'New Scan', 
  
  'Scans_HeaderText' : 'Scans performed.',
  'Scans_RelaysFound' : 'Relays found in the scan with identifier: ',
  'Scans_ScanNumber' : "Scan Number",
  'Scans_ScanId' : "Scan Id",
  'Scans_ScanDate' : "Scan Date",
  'Scans_NumRelays' : "Num. Relays",
  'Scans_RelayNickname' : "Nickname",
  'Scans_RelayFingerprint' : "Fingerprint",
  'Scans_RelayTORVersion' : "TOR Version",
  'Scans_RelayContact' : "Contact",
  'Scans_OS' : "OS",  
  
  'Botnet_HeaderText' : 'Bots registered in Database.',
  'Botnet_Address' : 'Address',
  'Botnet_User' : 'User',
  'Botnet_Password' : 'Password',
  'Botnet_Port' : 'Port',
  'Botnet_Nickname' : 'Nickname',
  'Botnet_Service' : 'Service',

  'OnionRepo_Incremental' : 'Incremental mode.',  
  'OnionRepo_Random' : 'Random mode.',  
  'OnionRepo_HeaderTextIncremental' : 'Data from the Onion Repository in Incremental mode.',  
  'OnionRepo_HeaderTextRandom' : 'Hidden Services Found.',  
  'OnionRepo_PartialAddress' : 'Partial Address', 
  'OnionRepo_ValidChars' : 'Valid Chars', 
  'OnionRepo_Start' : 'Start', 
  'OnionRepo_End' : 'End', 
  'OnionRepo_FirstQuartet' : 'First Quartet', 
  'OnionRepo_SecondQuartet' : 'Second Quartet',   
  'OnionRepo_ThirdQuartet' : 'Third Quartet',   
  'OnionRepo_FourthQuartet' : 'Fourth Quartet', 
  'OnionRepo_OnionAddress' : 'Onion Address', 
  'OnionRepo_ResponseCode' : 'Response Code',
  'OnionRepo_Headers' : 'Headers', 
  'OnionRepo_Description' : 'Description', 
  'OnionRepo_Type' : 'Type', 
  
  'ModalMenu_AboutTortazo_HeaderText' : 'About Tortazo',
  'ModalMenu_AboutTortazo_Privacy' : 'Privacy',
  'ModalMenu_AboutTortazo_Legal' : 'Legal',
  'ModalMenu_AboutTortazo_GeneralDocs' : 'General Documentation',
  'ModalMenu_AboutTortazo_TechnicalDocs' : 'Technical Documentation and Projects',
  'ModalMenu_Anonimity_HeaderText' : 'About TOR',
  'ModalMenu_Anonimity_Operation' : 'Operative Modes',
  'ModalMenu_Anonimity_Plugins' : 'Plugins',
  'ModalMenu_Anonimity_Kiddies' : 'Anti-script kiddies',

  'ModalMenu_Development_HeaderText' : 'Development',  
  'ModalMenu_Donations_HeaderText' : 'Dontations!',
  'ModalMenu_Help_HeaderText' : 'Help',
  'ModalMenu_PRO_HeaderText' : 'PRO Edition',

  'ModalAboutTortazo_ExecutionModesContent' : '',
  'ModalAboutTortazo_PluginsContent' : '',
  'ModalAboutTortazo_AntiScriptContent' : "Tortazo, over all things is 'Anti-Script Kiddies'. It's not desirable that some children online harass volunteer network relays. That would be a really bad use of this tool. This framework is for professional usage and for Python Hackers. Due this, the installation process is not very detailed and there is some configuration settings that any Python Hacker with time and a little research will learn quickly.",
  'TortazoModes_Text' : 'There are four execution modes in the current version of Tortazo, each allows gathering information from the TOR network and performing attacks against relays and hidden services. You can read more about this in the official documentation',
  'TortazoPlugins_Text' : 'The plugins in Tortazo are the best way to integrate external routines written in Python directly in the framework, allowing to any Python developer write his own tools to perform audits against hidden services and TOR relays',
  'TortazoDevelopment_Text' : 'If you want to contribute to the development of this Framework you can do this in many ways and one of them is proposing ideas of development or the implementation of new plugins. Your contributions are very valuable, especially if accompanied by code.',
  'TortazoDevelopmentPlugins_Text' : 'Plugins development', 
  'TortazoDonations_Text' : "There's another ways to contribute, the donations are one of them. If you want to support the development of Tortazo, you could donate some money. Thank you!",

  'ModalTrace_Anonymity' : 'Home/Anonymity',
  'ModalTrace_AboutTortazo' : 'Home/About Tortazo',
  'ModalTrace_Development' : 'Home/Development',
  'ModalTrace_Donate' : 'Home/Donate',
  'ModalTrace_PROEdition' : 'Home/PRO Edition',
  'ModalTrace_Help' : 'Home/Help',

  'ModalTrace_AnalizeScan' : 'Home/Analize Relay',
  'ModalTrace_GeoLocateRelays' : 'Home/Geolocate Relays',
  'ModalTrace_NewScan' : 'Home/New Scan', 

  'ModalTrace_DetailRelay' : "Home/Scans/Relay's Detail", 

  'RelayDetail_Address' : "IP", 
  'RelayDetail_State' : "State", 
  'RelayDetail_Reason' : "Reason", 
  'RelayDetail_Port' : "Port", 
  'RelayDetail_ServiceName' : "Service Name", 
  'RelayDetail_ServiceVersion' : 'Service Version',
  'RelayDetail_Nickname' : "Nickname", 
  'RelayDetail_Fingerprint' : "Fingerprint", 
  'RelayDetail_OS' : "OS", 
  "RelayDetail_Header" : "Details about the relay: ", 
  "RelayDetail_RelayInfo" : "Relay's Information", 
  "RelayDetail_DetailLabel" : "Details", 
  "RelayDetail_PortsInfo" : "Information about ports",
  
    'Shodan_Report' : "Shodan Report.",
    "Shodan_RelayInfo" : "Basic Information", 
    "ShodanRelay_city" : "City", 
    "ShodanRelay_countrycode" : "Country Code", 
    "ShodanRelay_countryname" : "Country",
    "ShodanRelay_ipaddress" : "IP Address",
    "ShodanRelay_isp" : "ISP",
    "ShodanRelay_lastUpdate" : "Last update",
    "ShodanRelay_Ports" : "Ports",
    "ShodanRelay_PortNumber" : "Port Number",
    "ShodanRelay_Hosts" : "Hosts",
    "ShodanRelay_HostName" : "Hostname",   
    
    "ShodanRelay_PortsInfo" : "Ports Information",
    
    "ShodanRelay_Port" : "Port",
    "ShodanRelay_Version" : "Version",
    "ShodanRelay_InfoReported" : "Information Reported",
    "ShodanRelay_Product" : "Product",
    "ShodanRelay_Timestamp" : "Timestamp",
}

var es_Translation = {
  'PageTitle' : 'Interfaz web  de Tortazo - construcción v1.2',
  'Project_Title' : 'Proyecto Tortazo',
  'Project_SubTitle' : 'Framework de auditoría y ataque para TOR',
  'Header1_Title' : 'Tortazo para Hackers de Python!',
  'contact' : "Contacto",

  'Carousel_Image1':"Modo de recolección de información   -   Recolección de información sobre los repetidores de salida en la red de TOR.",
  'Carousel_Image2':"Modo repositorio Onion   -   Utilizado para descubrir servicios ocultos.",
  'Carousel_Image3':"Arquitectura de Plugins  -  Ejecutar plugins desde el interprete para ejecutar auditorias contra servicios ocultos en TOR.",

  'AccordionInfo_AboutTortazoHeader' : "Acerca de Tortazo", 
  'AccordionInfo_InstallationSupportHeader' : "Instalación/Soporte", 
  'AccordionInfo_EditionsHeader' : "Ediciones", 
  'AccordionInfo_HelpContactHeader' : "Ayuda/Contacto", 
  'AccordionInfo_FAQHeader' : "FAQs", 
  'AccordionInfo_AboutTortazoText' : "Stem es una potente librería escrita en Python para ejecutar varios tipos de operaciones contra clientes TOR y autoridades de directorio. Tortazo es un proyecto libre que permite recolectar información sobre los repetidores de salida en la red de TOR, ejecutar ataques de fuerza bruta contra servicios tales como FTP o SSH y crear una Botnet con los repetidores de salida comprometidos con SSH. Tortazo incluye varias funcionalidades en forma de plugins para ejecutar actividades de pentesting contra repetidores de TOR y servicios ocultos en la web profunda de TOR. In la documentación, podrás ver en detalle todas las caracteristicas incluidas en Tortazo. EL objetivo principal de este proyecto es el de establecer un puente entre los hackers de Python y la web profunda de TOR. Ejecuta scripts en Python en la web profunda de TOR.", 
  'AccordionInfo_InstallationSupportText' : "Tortazo es 'anti-script kiddies' y no es una herramienta de descargar y ejecutar. Hay un gran número de dependencias y ajustes que debes conocer, pero si eres un hacker de Python, con la motivación necesaria, podrás leer la documentación y utilizar el framework correctamente", 
  'AccordionInfo_EditionsText' : "Actualmente existen 2 ediciones de Tortazo: La edición comunitaria y la profesional. La versión comunitaria es libre y la puedes utilizar sin restricción alguna, sin embargo en la versión profesional existen varias extensiones interesantes que solamente se encuentran disponibles para aquellos que cuenten con un código de producto valido.", 
  'AccordionInfo_HelpContactText' : "Si necesitas contactar: ", 
  'AccordionInfo_FAQText' : "Ejecuta Tortazo, pruebalo y si tienes cualquier duda, visita la página de preguntas frecuentes.", 

  'AccordionActions_GatherInformationHeader' : "Recolección de información",
  'AccordionActions_OnionRepositoryHeader' : "Repositorio Onion",
  'AccordionActions_BotnetHeader' : "Modo Botnet",
  'AccordionActions_PluginsHeader' : "Plugins",
  'AccordionActions_GatherInformationText' : "Este es el modo más simple de ejecución en Tortazo. En este modo, Tortazo realizará un escaneo con Nmap y los resultados para cada nodo de salida registrado en las autoridades directory o en la instancia TOR local, se almacena en la base de datos utilizada por Tortazo.",
  'AccordionActions_OnionRepositoryText' : "Tortazo intentará generar direcciones ''onion' y luego comprobará si las direcciones generadas apuntan a un servicio oculto en la web profunda",
  'AccordionActions_BotnetText' : 'En este modo, Tortazo leerá el archivo "TORTAZO_DIR/tortazo_botnet.bot" para crear los bots en el contexto de la botnet. Puede ejecutar comandos paralelos contra la totalidad de la botnet o excluir bots determinados para ejecutar los comandos sobre algunas de las máquinas de la botnet.',
  'AccordionActions_PluginsText' : "Ejecuta los plugins disponibles en Tortazo contra repetidores y servicios ocultos en la red de TOR.",

  'Check_Title' : "Prueba las funcionalidades de Tortazo!",
  'Anonymity_Menu' : "TOR",
  'About_Menu' : "Tortazo",
  'Development_Menu' : "Desarrollo",
  'Donate_Menu' : "Donaciones",
  'Scans_Menu' : "Escaneos",
  'OnionRepo_Menu' : "Repositorio de direcciones",
  'Botnet_Menu' : "Botnet",
  'Plugins_Menu' : 'Plugins',
  'TORState_Menu' : "Estado actual de la red TOR (Repetidores de salida)",
  'Help_Menu' : "Ayuda",
  'PRO_Menu' : "Obtener versión PRO",

  'Help_Text' : 'Si tienes cualquier duda o problema ejecutando Tortazo, por favor lee la documentación oficial. Si en la documentación no hay respuesta a tu problema, lee las FAQs. Si en las FAQs tampoco consigues resolverlo, puedes contactarme.',
  'PRO_Text' : 'La versión comunitaria contiene las funcionalidades básicas de Tortazo, pero la versión profesional contiene caracteristicas que son de uso estrictamente profesional y que no se encuentran disponibles para el público general. Por favor, contacta con nosotros para más información sobre cómo adquirir la versión profesional de la herramienta.',
  
  'Ok_Button' : 'Aceptar',
  'Cancel_Button' : 'Cancelar', 
  'Analize_Button' : 'Analizar', 
  'GeolocateRelays_Button' : 'Geolocalizar repetidores seleccionados', 
  'NewScan_Button' : 'Nuevo Escaneo',   
  
  'Scans_HeaderText' : 'Escaneos ejecutados.',
  'Scans_RelaysFound' : 'Repetidores encontrados en el escaneo con identificador: ',
  'Scans_ScanNumber' : "Número escaneo",
  'Scans_ScanId' : "Identificador escaneo",
  'Scans_ScanDate' : "Fecha Escaneo",
  'Scans_NumRelays' : "Número de repetidores",
  'Scans_RelayNickname' : "Etiqueta",
  'Scans_RelayFingerprint' : "Huella",
  'Scans_RelayTORVersion' : "Versión de TOR",
  'Scans_RelayContact' : "Contacto",
  'Scans_OS' : "OS",  
  
  'Botnet_HeaderText' : 'Máquinas registradas en base de datos.',
  'Botnet_Address' : 'Dirección',
  'Botnet_User' : 'Usuario',
  'Botnet_Password' : 'Contraseña',
  'Botnet_Port' : 'Puerto',
  'Botnet_Nickname' : 'Etiqueta',
  'Botnet_Service' : 'Servicio',    
  
  'OnionRepo_Incremental' : 'Modo Incremental.',  
  'OnionRepo_Random' : 'Modo Aleatorio.',  
  'OnionRepo_HeaderTextIncremental' : 'Información recolectada en modo Incremental.',  
  'OnionRepo_HeaderTextRandom' : 'Servicios ocultos encontrados.', 
  'OnionRepo_PartialAddress' : 'Dirección Parcial', 
  'OnionRepo_ValidChars' : 'Caracteres validos', 
  'OnionRepo_Start' : 'Inicio', 
  'OnionRepo_End' : 'Fin', 
  'OnionRepo_FirstQuartet' : 'Primer Cuarteto', 
  'OnionRepo_SecondQuartet' : 'Segundo Cuarteto',   
  'OnionRepo_ThirdQuartet' : 'Tercer Cuarteto',   
  'OnionRepo_FourthQuartet' : 'Último Cuarteto', 
  'OnionRepo_OnionAddress' : 'Dirección Onion', 
  'OnionRepo_ResponseCode' : 'Código Respuesta',
  'OnionRepo_Headers' : 'Cabeceras', 
  'OnionRepo_Description' : 'Descripción', 
  'OnionRepo_Type' : 'Tipo',
  
  'ModalMenu_AboutTortazo_HeaderText' : 'Acerca de Tortazo',
  'ModalMenu_AboutTortazo_Privacy' : 'Privacidad',
  'ModalMenu_AboutTortazo_Legal' : 'Legalidad',
  'ModalMenu_AboutTortazo_GeneralDocs' : 'Documentación general',
  'ModalMenu_AboutTortazo_TechnicalDocs' : 'Documentación tecnica y Proyectos',
  'ModalMenu_Anonimity_HeaderText' : 'Acerca de TOR',
  'ModalMenu_Anonimity_Operation' : 'Modos de Operación',
  'ModalMenu_Anonimity_Plugins' : 'Plugins',
  'ModalMenu_Anonimity_Kiddies' : 'Anti-script kiddies',  
  
  'ModalMenu_Development_HeaderText' : 'Desarrollo',  
  'ModalMenu_Donations_HeaderText' : 'Donaciones!',
  'ModalMenu_Help_HeaderText' : 'Ayuda',
  'ModalMenu_PRO_HeaderText' : 'Edición Profesional',  

  'ModalAboutTortazo_ExecutionModesContent' : '',
  'ModalAboutTortazo_PluginsContent' : '',
  'ModalAboutTortazo_AntiScriptContent' : "Tortazo, sobre todo es 'Anti-Script Kiddies'. No es deseable que algunos niños en Internet usen Tortazo para fastidiar repetidores en la red de TOR. Eso representaria un mal uso de esta herramienta. Este framework es para uso profesional y especialmente dedicado a Hackers de Python. Debido a esto, el proceso de instalación no es demasiado detallado, no hay scripts de arranque automático y no se explican algunos detalles de configuración que cualquier Hacker de Python con tiempo y un poco de investigación podrá aprender rápidamente.",
  'TortazoModes_Text' : 'Hay cuatro modos de ejecución en la versión actual del Tortazo, cada uno permite la recopilación de información de la red TOR y la realización de ataques contra los relés y los servicios ocultos. Puede leer más sobre esto en la documentación oficial',
  'TortazoPlugins_Text' : 'Los plugins de Tortazo son la mejor forma de integrar en el framework cualquier rutina externa escrita en Python, lo que permite a cualquier desarrollador escribir sus propias herramientas para realizar auditorías contra los servicios ocultos y repetidores de TOR',
  'TortazoDevelopment_Text' : 'Si quieres contribuir con el desarrollo de este Framework puedes hacerlo de muchas formas y una de ellas es proponiendo ideas de desarrollo o la implementación de nuevos plugins. Tus aportes son muy valiosos, especialmente si vienen acompañados de código',
  'TortazoDevelopmentPlugins_Text' : 'Desarrollo de Plugins', 
  'TortazoDonations_Text' : "Hay otras maneras de contribuir, las donaciones son una de ellas. Si desea apoyar el desarrollo de Tortazo, podría donar algo de dinero. Gracias!",

  'ModalTrace_Anonymity' : 'Home/Anonimato',
  'ModalTrace_AboutTortazo' : 'Home/Sobre Tortazo',
  'ModalTrace_Development' : 'Home/Desarrollo',
  'ModalTrace_Donate' : 'Home/Donaciones',
  'ModalTrace_PROEdition' : 'Home/Edición Profesional',
  'ModalTrace_Help' : 'Home/Ayuda',

  'ModalTrace_AnalizeScan' : 'Home/Analizar Repetidor',
  'ModalTrace_GeoLocateRelays' : 'Home/Geolocalizar Repetidores',
  'ModalTrace_NewScan' : 'Home/Nuevo Escaneo', 

  'ModalTrace_DetailRelay' : "Home/Escaneos/Detalle de repetidor.",

  'RelayDetail_Address' : "Dirección IP", 
  'RelayDetail_State' : "Estado", 
  'RelayDetail_Reason' : "Causa", 
  'RelayDetail_Port' : "Puerto", 
  'RelayDetail_ServiceName' : "Nombre del Servicio", 
  'RelayDetail_ServiceVersion' : 'Versión del Servicio',
  'RelayDetail_Nickname' : "Etiqueta", 
  'RelayDetail_Fingerprint' : "Huella", 
  'RelayDetail_OS' : "Sistema Operativo", 
  "RelayDetail_Header" : "Detalles sobre el repetidor: ",
  "RelayDetail_RelayInfo" : "Datos del repetidor",
  "RelayDetail_DetailLabel" : "Detalles", 
  "RelayDetail_PortsInfo" : "Información sobre Puertos",
  
  "Shodan_Report" : "Reporte de Shodan.",
  "Shodan_RelayInfo" : "Información Básica", 
  "ShodanRelay_city" : "Ciudad", 
  "ShodanRelay_countrycode" : "Código de País", 
  "ShodanRelay_countryname" : "País",
  "ShodanRelay_ipaddress" : "Dirección IP",
  "ShodanRelay_isp" : "ISP",
  "ShodanRelay_lastUpdate" : "Última modificación",
  "ShodanRelay_Ports" : "Puertos",
  "ShodanRelay_PortNumber" : "Puerto",
  "ShodanRelay_Hosts" : "Hosts",
  "ShodanRelay_HostName" : "Nombre de dominio",    
  "Shodan_RelayPortsInfo" : "Información sobre Puertos",
  
    "ShodanRelay_Port" : "Puerto",
    "ShodanRelay_Version" : "Versión",
    "ShodanRelay_InfoReported" : "Información Reportada",
    "ShodanRelay_Product" : "Producto",
    "ShodanRelay_Timestamp" : "Marca de tiempo",
  
}

var app = angular.module('tortazoApp', [
  'ngRoute',
  'ngCookies',
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