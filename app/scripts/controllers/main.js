'use strict';

/**
 * @ngdoc function
 * @name zen404App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zen404App
 */
angular.module('zen404App')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.nextError = function() {
      var currentPath = $location.path();
      if (currentPath.indexOf('/error-') === 0) {
        var errorNumber = currentPath.charAt(7);
        errorNumber = parseInt(errorNumber) + 1;
        
        // equivalent to !is_NaN
        if (errorNumber === errorNumber) {
          if (errorNumber >= 1 && errorNumber <= 7) {
            $location.path('/error-' + errorNumber);
            return;
          }
          if (errorNumber == 8) {
            $location.path('/error-1');
            return;
          }
        } 
      }
      
      // assume user is at the home page which is showing error-1 page
      $location.path('/error-2');  
    };
    
    $scope.randomError = function() {
      var currentPath = $location.path();
      var currentErrorNumber = currentPath.indexOf('/error-') === 0 ? currentPath.charAt(7) : -1;
      
      var randomErrorNumber;
      do {
        randomErrorNumber = Math.floor((Math.random() * 7) + 1);
      } while (currentErrorNumber == randomErrorNumber)
      
      $location.path('/error-' + randomErrorNumber);
    };
  }]);
