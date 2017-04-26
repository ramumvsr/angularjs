/** Created by sandeep **/

'use strict';
var sureifyBackendUrlModule = angular.module('sureifyBackendUrlModule',[]);
sureifyBackendUrlModule.constant('BackendUrls',{
    "baseUrl" : 'http://starlord.hackerearth.com/'
});

sureifyBackendUrlModule.constant('SubBackendUrls',{
    CokeStudio : {
        "cokeStudioUrl" : 'sureify/cokestudio'
    }
});
