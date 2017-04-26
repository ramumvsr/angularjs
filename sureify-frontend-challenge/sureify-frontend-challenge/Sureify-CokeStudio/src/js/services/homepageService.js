/** Created by sandeep **/

/**
 * mainpage service
 */
'use strict';
angular.module('sureifyMainPageServiceModule', [])
    .factory('SureifyMainPageService', ['$http','BackendUrls','SubBackendUrls', function($http,BackendUrls,SubBackendUrls) {

        var baseUrl = BackendUrls.baseUrl;
        var cokeStudioUrl = SubBackendUrls.CokeStudio.cokeStudioUrl;

    return {
        getCokeStudioData: function() {
            return $http.get(baseUrl + cokeStudioUrl, {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    format: "json"
                }
            });
        }
    };
}]);
