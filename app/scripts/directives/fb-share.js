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
                    
                    var rootUrl = 'http://xming13.github.io/zen404/dist';
                    var name, path, caption, description, message;
                    
                    switch ($location.path()) {
                        // case error-1 will be handled with default
                        case '/error-2':
                            name = 'Error 2';
                            path = 'error-2';
                            caption = '2 Caption you want to show';
                            description = '2 Description you want to show';
                            message = '2 Message you want to show';
                            break;
                        case '/error-3':
                            name = 'Error 3';
                            path = 'error-3';
                            caption = '3 Caption you want to show';
                            description = '3 Description you want to show';
                            message = '3 Message you want to show';
                            break;
                        case '/error-4':
                            name = 'Error 4';
                            path = 'error-4';
                            caption = '4 Caption you want to show';
                            description = '4 Description you want to show';
                            message = '4 Message you want to show';
                            break;
                        case '/error-5':
                            name = 'Error 5';
                            path = 'error-5';
                            caption = '5 Caption you want to show';
                            description = '5 Description you want to show';
                            message = '5 Message you want to show';
                            break;
                        case '/error-6':
                            name = 'Error 6';
                            path = 'error-6';
                            caption = '6 Caption you want to show';
                            description = '6 Description you want to show';
                            message = '6 Message you want to show';
                            break;
                        case '/error-7':
                            name = 'Error 7';
                            path = 'error-7';
                            caption = '7 Caption you want to show';
                            description = '7 Description you want to show';
                            message = '7 Message you want to show';
                            break;
                        default:
                            name = 'Error 1';
                            path = 'error-1';
                            caption = '1 Caption you want to show';
                            description = '1 Description you want to show';
                            message = '1 Message you want to show';
                            break;
                    }
                    
                    FB.ui({
                        method: 'feed',
                        name: name,
                        link: rootUrl + '/#/' + path,
                        picture: rootUrl + '/images/' + path + '.jpg',
                        caption: caption,
                        description: description,
                        message: message
                    });
                });
            }
        };
    }
]);