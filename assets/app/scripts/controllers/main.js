'use strict';

angular.module('testyeomanApp')
    .controller('MainCtrl',function ($scope, $http) {
        $scope.setBodyClass('Main');
        $scope.templates = {};
        $scope.audits = {};
        $scope.msg = "Chargement de l'application...";

        $http.get($scope.prefixHttp + '/rest/templates').success(function (data, status) {
            $scope.msg = "";
            $scope.templates = data;
        }).error(function (data, status) {
                $scope.msg = "Erreur...";
            });

        $http.get($scope.prefixHttp + '/rest/audits').success(function (data, status) {
            $scope.msg = "";
            $scope.audits = data;
        }).error(function (data, status) {
                $scope.msg = "Erreur...";
            });

    }).controller('CommonCtrl', function ($scope, $http) {
        delete $http.defaults.headers.common['X-Requested-With'];
//        $scope.prefixHttp = 'http://127.0.0.1:8080/wizzvet-serv2';
//        $scope.prefixHttp = 'http://192.168.1.85:8080/costantini-backend';
        $scope.prefixHttp = 'http://192.168.1.86:8080/costantini-backend';

        $scope.mainBgColor = '';

        $scope.setBodyClass = function (suffix) {
            $scope.mainBgColor = suffix;
        }

        $scope.dateTimeFormat = 'dd-MM-yyyy HH:mm:ss';
    });
