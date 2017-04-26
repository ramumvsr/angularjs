/**
 *Mainpage controller
 */

'use strict';
angular.module('sureifyMainPageControllerModule', [])
.controller('SureifyMainPageController', ['$rootScope','SureifyMainPageFactory',
    function($rootScope,SureifyMainPageFactory) {

        var totalcount = 0;
        var paginationRecords = 6;

        $rootScope.song = "";

        $rootScope.sureifyCokeStudioBulkData = [];
        $rootScope.sureifyCokeStudioData = [];
        $rootScope.favoritesList = [];
        $rootScope.isFavoritesArea = false;
        $rootScope.showHomeButton = false;
        $rootScope.isEmptyData = false;
        $rootScope.isServerError = false;
        $rootScope.isEmptyFavoritesData = false;

        $rootScope.intializeSureifyCokeStudioData = function () {
            SureifyMainPageFactory.getCokeStudioData(getCokeStudioData_callback);
        };

        function getCokeStudioData_callback(response,isSuccess){
            if(isSuccess){
                $rootScope.sureifyCokeStudioBulkData = response.data;
                if($rootScope.sureifyCokeStudioBulkData.length===0){
                    $rootScope.isEmptyData = true;
                }
                for(var i in  $rootScope.sureifyCokeStudioBulkData){
                    $rootScope.sureifyCokeStudioBulkData[i].isFavoriteSong = false;
                }
                totalcount = 0;
                $rootScope.isServerError = false;
                $rootScope.loadMoreItems();
            }else{
                $rootScope.isServerError = true;
                $rootScope.errorMessage = "Server Error. Please try again later";
            }
        }

        $rootScope.loadMoreItems = function () {
            if (totalcount < $rootScope.sureifyCokeStudioBulkData.length) {
                var currentLength = 0;
                if (totalcount + paginationRecords <= $rootScope.sureifyCokeStudioBulkData.length) {
                    currentLength = totalcount + paginationRecords;
                } else {
                    currentLength = $rootScope.sureifyCokeStudioBulkData.length;
                }
                for (var i = totalcount; i < currentLength; i++) {
                    $rootScope.sureifyCokeStudioData.push($rootScope.sureifyCokeStudioBulkData[i]);
                    totalcount++;
                }
            }
        };

        $rootScope.addAsFavorite = function (musicData,index) {
            if(musicData.isFavoriteSong){
                musicData.isFavoriteSong = false;
            }else{
                musicData.isFavoriteSong = true;
            }
            $rootScope.sureifyCokeStudioData[index] = musicData;

        };

        $rootScope.showHomePageData = function () {
            $rootScope.isFavoritesArea = false;
            $rootScope.showHomeButton = false;
        };

        $rootScope.showMyFavorites = function () {
            $rootScope.favoritesList = [];
            favoriteSongsData();
            $rootScope.isFavoritesArea = true;
            $rootScope.showHomeButton = true;
        };

        function favoriteSongsData(){
            for(var i in  $rootScope.sureifyCokeStudioBulkData){
                if($rootScope.sureifyCokeStudioBulkData[i].isFavoriteSong){
                    $rootScope.favoritesList.push($rootScope.sureifyCokeStudioBulkData[i]);
                }
            }

            if($rootScope.favoritesList.length === 0){
                $rootScope.isEmptyFavoritesData = true;
            }else{
                $rootScope.isEmptyFavoritesData = false;
            }
        }

    }
]);
