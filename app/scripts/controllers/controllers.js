'use strict';

/**
 * @ngdoc function
 * @name guthubApp.controller:ControllersCtrl
 * @description
 * # ControllersCtrl
 * Controller of the guthubApp
 */

var app = angular.module("guthub.controllers", []);

app.controller('ListCtrl', function($scope, recipes) {
	$scope.recipes = recipes;
});

app.controller('ViewCtrl', function($scope, $location, recipe) {
	$scope.recipe = recipe;
	
	$scope.edit = function() {
		$location.path('/edit/' + recipe.id);
	};
});

app.controller('EditCtrl', function($scope, $location, recipe) {
	$scope.recipe = recipe;
	
	$scope.save = function() {
		$scope.recipe.$save(function(recipe) {
			$location.path('/view/' + recipe.id);
		});
	};
	
	$scope.remove = function() {
		delete $scope.recipe;
		$location.path('/');
	};
});

app.controller('NewCtrl', function($scope, $location, Recipe) {
	$scope.recipe = new Recipe({
		ingredients: [{}]
	});
	
	$scope.save = function() {
		$scope.recipe.$save(function(recipe) {
			$location.path('/view/' + recipe.id);
		});
	}
});

app.controller('IngredientsCtrl', function($scope) {
	$scope.addIngredient = function() {
		var ingredients = $scope.recipe.ingredients;
		ingredients[ingredients.length] = {};
	};
	
	$scope.removeIngredient = function(index) {
		$scope.recipe.ingredients.splice(index, 1);
	};
});