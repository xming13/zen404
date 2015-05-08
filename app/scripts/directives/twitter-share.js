'use strict';

angular.module('zen404App')
    .directive('twitterShare', ['$window', '$location',
        function ($window, $location) {
            return {
                restrict: 'A',
                link: function (scope, element) {
                    element.on('click', function (e) {
                        e.returnValue = false;
                        if (e.prevenDefault) {
                            e.preventDefault();
                        }

                        var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
                            width = 550,
                            height = 420,
                            winHeight = screen.height,
                            winWidth = screen.width;
                        var left = Math.round((winWidth / 2) - (width / 2));
                        var top = 0;

                        if (winHeight > height) {
                            top = Math.round((winHeight / 2) - (height / 2));
                        }

                        var url = encodeURIComponent($location.absUrl());
                        var count = 'none';
                        var text = encodeURIComponent('Animated haiku 404 error messages - ');
                        var related = 'tabrischen';
                        var via = 'tabrischen';

                        var queryString = 'url=' + url + '&text=' + text + '&related=' + related + '&via=' + via + '&count=' + count;

                        window.open('https://twitter.com/share?' + queryString, 'share', windowOptions + ',width=' + width +
                            ',height=' + height + ',left=' + left + ',top=' + top);
                    });
                }
            };
        }
    ]);