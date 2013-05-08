'use strict';

angular.module('testyeomanApp')
    .controller('RouteCtrl', function ($scope, $http) {
        $scope.setBodyClass('');
        $scope.msg = "Config is loading...";

        //console.log("http : " + angular.toJson($http.defaults.headers));
        // delete $http.defaults.headers.common['X-Requested-With'];
        //console.log("http2 : " + angular.toJson($http.defaults.headers));
        $http.get($scope.prefixHttp+'/rest/config/fr').success(function (data) {
            $scope.msg = "Config OK...";
        }).error(function (data, status) {
                $scope.msg = "Config KO...";
            });
    });
