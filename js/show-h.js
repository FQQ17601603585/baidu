app.controller('homeCtrl',function($scope,$http,$timeout){
//	轮播图
$timeout(function(){
	var swiper= new Swiper('.swiper-container',{
		loop:true,
		pagination: '.swiper-pagination',
	    autoplay:1000,
			
	})
},1000);
//实现获取数据
$http.get("../data/show.json")
.success(function(data){
	$scope.Carousel=data.Carousel;
	console.log($scope.Carousel);
	$scope.ico=data.ico;
	console.log($scope.ico);
	$scope.hot=data.hot;
	console.log($scope.hot)
	$scope.hotFilm3=data.hotFilm3;
	console.log($scope.hotFilm3)
	
	
})
	
	
	
	
})