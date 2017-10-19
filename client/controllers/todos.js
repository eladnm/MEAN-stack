var myApp = angular.module('myApp');

myApp.controller('todosController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('todosController loaded...');

	$scope.getTodos = function(){
		$http.get('/api/todo').success(function(response){
			$scope.todos = response;
		});
	}

	$scope.getTodosById = function(){
		var id = $routeParams.id;
		$http.get('/api/todo/'+id).success(function(response){
			$scope.todo = response;
		});
	}

	$scope.addTodo = function(){
		console.log($scope.todo);
		$http.post('/api/todo', $scope.todo).success(function(response){
			window.location.href='#/todos';
		});
	}

	$scope.updateTodo = function(){
		var id = $routeParams.id;
		$http.put('/api/todos/'+id, $scope.todo).success(function(response){
			window.location.href='#/todos';
		});
	}

	$scope.removeTodo = function(id){
		$http.delete('/api/todos/'+id).success(function(response){
			window.location.href='#/todos';
		});
	}
}]);