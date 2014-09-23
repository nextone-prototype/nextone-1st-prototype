'use strict';

angular.module('frontend', ['ngResource', 'ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/sub', {
        templateUrl: 'views/sub.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
