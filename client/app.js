var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'todosController',
		templateUrl: 'views/todos.html'
	})
	.when('/families', {
		controller:'familiesController',
		templateUrl: 'views/families.html'
	})
	.when('/families/details/:id',{
		controller:'familiesController',
		templateUrl: 'views/family_details.html'
	})
	.when('/families/add',{
		controller:'familiesController',
		templateUrl: 'views/add_family.html'
	})
	.when('/families/edit/:id',{
		controller:'familiesController',
		templateUrl: 'views/edit_family.html'
	})
	.when('/todos', {
		controller:'todosController',
		templateUrl: 'views/todos.html'
	})
	.when('/todos/add',{
		controller:'todosController',
		templateUrl: 'views/add_todo.html'
	})
});