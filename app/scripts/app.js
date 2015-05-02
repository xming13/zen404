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
        redirectTo: '/error-1'
      })
      .when('/error-1', {
        templateUrl: 'views/error-1.html'
      })
      .when('/error-2', {
        templateUrl: 'views/error-2.html'
      })
      .when('/error-3', {
        templateUrl: 'views/error-3.html'
      })
      .when('/error-4', {
        templateUrl: 'views/error-4.html'
      })
      .when('/error-5', {
        templateUrl: 'views/error-5.html'
      })
      .when('/error-6', {
        templateUrl: 'views/error-6.html'
      })
      .when('/error-7', {
        templateUrl: 'views/error-7.html'
      })
      .otherwise({
        redirectTo: '/error-1'
      });
  });
