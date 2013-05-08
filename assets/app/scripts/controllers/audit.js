'use strict';

angular.module('testyeomanApp')
  .controller('AuditCtrl', function ($scope, $routeParams, $http) {
        $scope.setBodyClass('');
        $scope.auditType = $routeParams.auditType;
        $scope.accessMode = $routeParams.accessMode;
    });
