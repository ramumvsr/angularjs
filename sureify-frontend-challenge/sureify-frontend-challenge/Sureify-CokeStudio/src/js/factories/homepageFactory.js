/**
 * Created by Sandeep
 **/

/**
 * Mainpage factory
 */
'use strict';
angular.module('sureifyMainPageFactoryModule', [])
    .factory("SureifyMainPageFactory", ['SureifyMainPageService',
    function(SureifyMainPageService) {

        var factory = {};

        factory.getCokeStudioData = function(getCokeStudioData_callback) {
            var service = SureifyMainPageService.getCokeStudioData();
            service.then(function(response) {
                getCokeStudioData_callback(response, true);
            },function(error) {
                getCokeStudioData_callback(error, false);
            });
        };


        return {
            getCokeStudioData : function (getCokeStudioData_callback) {
                factory.getCokeStudioData(getCokeStudioData_callback);
                return factory;
            }
        };

    }
]);
