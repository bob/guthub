'use strict';

/**
 * @ngdoc directive
 * @name guthubApp.directive:directives
 * @description
 * # directives
 */

var directives = angular.module("guthub.directives", []);

directives.directive("butterbar", function($rootScope) {
	return {
		link: function(scope, element, attrs) {
			element.addClass('hide');
			
			$rootScope.$on('$routeChangeStart', function() {
				element.removeClass('hide');
			});
			
			$rootScope.$on('$routeChangeSuccess', function() {
				element.addClass('hide');
			});
		}
	};
});

directives.directive("focus", function() {
	return {
		link: function(scope, element, attrs) {
			element[0].focus();
		}
	};
});