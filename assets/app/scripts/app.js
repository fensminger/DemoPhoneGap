'use strict';

angular.module('testyeomanApp', ['ui'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/route', {
        templateUrl: 'views/route.html',
        controller: 'RouteCtrl'
      })
      .when('/audit/:accessMode/:auditType', {
        templateUrl: 'views/audit.html',
        controller: 'AuditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
