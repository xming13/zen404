'use strict';

/**
 * @ngdoc function
 * @name zen404App.directive:textillate
 * @description
 * # textillate
 * Directive of the zen404App
 */
angular.module('zen404App')
  .directive('textillate', function () {
    return {
		restrict: 'A',
		link: function(scope, element) {
			var $elem = angular.element(element);
			
			// have to manually pass in the initialDelay from data attributes due to a bug(?) in textillate 
			var initialDelay = $elem.data('initialDelay') ? $elem.data('initialDelay') : 0;
			$elem.textillate({
				initialDelay: initialDelay
			});
		}
	};
  });
