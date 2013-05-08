'use strict';

function convertDateMs(datems) {
    if (datems==null) {
        return null;
    }
    var beginDate = new Date();
    beginDate.setTime(datems);
    return beginDate;
}


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
      .when('/audit/:accessMode/:auditName', {
        templateUrl: 'views/audit.html',
        controller: 'AuditCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
