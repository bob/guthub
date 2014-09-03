'use strict';

/**
 * @ngdoc function
 * @name guthubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guthubApp
 */
angular.module('guthubApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
