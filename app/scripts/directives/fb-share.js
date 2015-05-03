'use strict';
/* global FB */

angular.module('zen404App')
  .directive('fbShare', ['$location',
    function($location) {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.on('click', function(e) {
                    e.preventDefault();
                    
                    console.log($location.path());
                    switch ($location.path()) {
                        case '/error-3':
                            FB.ui({
                                method: 'feed',
                                name: 'Error 3',
                                link: 'http://xming13.github.io/zen404/dist/#/error-3',
                                picture: 'http://xming13.github.io/zen404/dist/images/error-3.0f7e8b40.jpg',
                                caption: '3 Caption you want to show',
                                description: '3 Description you want to show',
                                message: '3 Message you want to show'
                            });
                            break;
                        case '/error-4':
                            FB.ui({
                                method: 'feed',
                                name: 'Error 4',
                                link: 'http://xming13.github.io/zen404/dist/#/error-4',
                                picture: 'http://xming13.github.io/zen404/dist/images/error-4.671ccb1d.jpg',
                                caption: '4 Caption you want to show',
                                description: '4 Description you want to show',
                                message: '4 Message you want to show'
                            });
                    }
                    
                });
            }
        };
    }
]);