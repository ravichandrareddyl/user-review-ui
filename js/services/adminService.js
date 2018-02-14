'use strict';
angular.module('userReview')
    .factory('adminService', function ($q, $http) {

        function getUserData(payload) {
            return $http.get('js/data/userData.json');
        }

        return {
            getUserData: getUserData
        };
    });