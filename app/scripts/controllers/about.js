'use strict';

/**
 * @ngdoc function
 * @name guthubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guthubApp
 */
angular.module('guthubApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
