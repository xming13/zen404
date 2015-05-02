'use strict';

/**
 * @ngdoc overview
 * @name zen404App
 * @description
 * # zen404App
 *
 * Main module of the application.
 */
angular
  .module('zen404App', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
