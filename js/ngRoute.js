

app.controller("hotCtrl",function($scope,$http,$timeout){

	    $http.get("data/movie.json")
	    .success(function(data){
	    	  $scope.bannar = data.bannar;
//	    	  console.log($scope.bannar);
	    	  $scope.list = data.list;
//	    	  console.log( $scope.list);
             $scope.hotMovie = data.hotMovie;
//           console.log($scope.hotMovie);
	    })
	    
	    
	    $timeout(function(){
	    	
	    	
	    	 var swiper=new Swiper(".movie-swiper-container",{
			        //隔多长时间切换一次
			        autoplay:1000,
			        loop:true,
			        //图片切换之后轮播自动播放
			        autoplayDisableOnInteraction:false,
			        //圆点显示并且跟随图片移动
			        pagination:".swiper-pagination",
			        //点击圆点切换相应的图片
			        paginationClickable:true
			    })
	    	  
	    	  var swiper2 = new Swiper('.swiper-container2', {
//			        pagination: '.swiper-pagination',
			        slidesPerView: 3.2,
			        paginationClickable: true,
			        spaceBetween: 3
			    });
	    	
	    	
	    	
	    	
	    	
	    	
	    },500)
	    
	    
})

