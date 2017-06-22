
var app = angular.module("app",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
	$routeProvider
	.when("/cinema",{
		  templateUrl:"cinema.html",
		   controller:"cinemaCtrl"
	})
	 .otherwise({
	 	    redirectTo:"/cinema" 
	 });
	
	
}]);
app.controller("cinemaCtrl",function($scope,$http,$timeout){
	    $http.get("../data/cinema.json")
	    .success(function(data){
	    	  $scope.Carousel = data.Carousel;
	    	  console.log($scope.Carousel );
	    	  $scope.favourable=data.favourable;
	    	  console.log($scope.favourable)
	    })
	    
})

