var sureifyFrontendApp = angular.module('sureifyCokeStudio', ['ngRoute','appInitializeModule']);

sureifyFrontendApp.config(function ($routeProvider) {

    $routeProvider
        .when('/mainPage',
        {
            'templateUrl'  : 'src/templates/mainPage.html',
            'controller'   : 'SureifyMainPageController'
        })
        .otherwise({redirectTo: '/mainPage'});

});
