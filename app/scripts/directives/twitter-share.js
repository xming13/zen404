'use strict';

angular.module('zen404App')
  .directive('twitterShare', ['$window', '$location',
    function($window, $location) {
        return {
            restrict: 'A',
            link: function($scope, $element) {
                $window.twttr.ready(
                  function (twttr) {                    
                    twttr.events.bind(
                      'rendered',
                      function (event) {
                        if (angular.element(event.target).siblings().length > 0) {
                            angular.element(event.target).siblings().remove();
                        }
                      }
                    );
                  }
                );

                $scope.$location = $location;
                $scope.$watch('$location.absUrl()', function(newValue) {
                    $window.twttr.widgets.createShareButton(
    					newValue,
    					$element[0],
    					{
    						count: 'none',
    						text: 'Animated haiku 404 error messages - ',
                            related: 'tabrischen',
                            via: 'tabrischen'
    					}
    				);    
                });
            }
        };
    }
]);