'use strict';

/**
 * @ngdoc overview
 * @name guthubApp
 * @description
 * # guthubApp
 *
 * Main module of the application.
 */
var app = angular.module('guthubApp', [
    'ngResource',
    'ngRoute',
		'guthub.directives',
		'guthub.services',
		'guthub.controllers'
  ]);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/list.html',
			controller: 'ListCtrl',
			resolve: {
				recipes: function(MultiRecipeLoader) {
					return MultiRecipeLoader();
				}
			}
		})
		.when('/edit/:recipeId', {
			templateUrl: 'views/recipe_form.html',
			controller: 'EditCtrl',
			resolve: {
				recipe: function(RecipeLoader) {
					return RecipeLoader();
				}
			}
		})
		.when('/view/:recipeId', {
			templateUrl: 'views/view_recipe.html',
			controller: 'ViewCtrl',
			resolve: {
				recipe: function(RecipeLoader) {
					return RecipeLoader();
				}
			}
		})
		.when('/new', {
			templateUrl: 'views/recipe_form.html',
			controller: 'NewCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
