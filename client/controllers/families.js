var myApp = angular.module('myApp');

myApp.controller('familiesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('familiesController loaded...');

	$scope.getFamilies = function(){
		$http.get('/api/families').success(function(response){
			$scope.families = response;
		});
	}

	$scope.getFamiliesById = function(){
		var id = $routeParams.id;
		$http.get('/api/families/'+id).success(function(response){
			$scope.family = response;
		});
	}

	$scope.addFamily = function(){
		console.log($scope.family);
		$http.post('/api/families/', $scope.family).success(function(response){
			window.location.href='#/families';
		});
	}

	$scope.updateFamily = function(){
		var id = $routeParams.id;
		$http.put('/api/families/'+id, $scope.family).success(function(response){
			window.location.href='#/families';
		});
	}

	$scope.removeFamily = function(id){
		$http.delete('/api/families/'+id).success(function(response){
			window.location.href='#/families';
		});
	}
}]);