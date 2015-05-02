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
      .when('/error-1', {
        templateUrl: 'views/error-1.html',
        controller: 'Error1Ctrl'
      })
      .when('/error-2', {
        templateUrl: 'views/error-2.html',
        controller: 'Error2Ctrl'
      })
      .when('/error-3', {
        templateUrl: 'views/error-3.html',
        controller: 'Error3Ctrl'
      })
      .when('/error-4', {
        templateUrl: 'views/error-4.html',
        controller: 'Error4Ctrl'
      })
      .when('/error-5', {
        templateUrl: 'views/error-5.html',
        controller: 'Error5Ctrl'
      })
      .when('/error-6', {
        templateUrl: 'views/error-6.html',
        controller: 'Error6Ctrl'
      })
      .when('/error-7', {
        templateUrl: 'views/error-7.html',
        controller: 'Error7Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
