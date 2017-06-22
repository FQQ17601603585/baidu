var app=angular.module("myapp",["ngRoute"]);
				app.config(function($routeProvider){
				$routeProvider.when("/my",{templateUrl:"view/my.html",controller:"myctrl"})
				.when("/footer1",{templateUrl:"view/recommend.html",controller:"recommend"})
				.when("/movie",{templateUrl:"view/movie.html",controller:"hotCtrl"})
				.when("/fanquan",{templateUrl:"view/fanquan.html",controller:"fanctrl"})
				.when("/show",{templateUrl:"view/show.html",controller:"homeCtrl"})
				.otherwise({redirectTo:"/footer1"})
			})
			
//			个人中心
			app.controller("myctrl",function($scope,$http,$timeout){
				
				$http.get("data/my.json")
		                .success(function (response) {
		                	$scope.personList = response.personList;
//		                	console.log($scope.personList)
		                	
		                });
		                $("#payment").click(function(){
		               	window.open("view/lyq/lyq-daifukuan.html", "_self")
		                })
		                 $("#header").click(function(){
		               	window.open("view/registe.html", "_self")
		                })
		                  $("#Paid").click(function(){
		               	window.open("view/lyq/lyq-daifukuan.html", "_self")
		                })
		                $("#bottom-btn>a:first-child").click(function(){
		                	
		                	 	window.open("view/login.html", "_self")
		                })
		                 $("#bottom-btn>a:last-child").click(function(){
		                	 	window.open("view/registe.htmll", "_self")
		                })
		                  $timeout(function(){
		                  	var arr=["view/lyq/view/member.html","view/lyq/view/voucher.html","view/lyq/view/exchangeCode.html"]
		                  	  $("#personList>li").click(function(){
//		                  	alert(1)
		                  	var index=$(this).index();
		                  	window.open(arr[index],"_self");
//		                  		alert(index);
		                  })
		                  },1000)
		                
    		});
    		
    		
//  		sunyinge

//   hotctrl    第二部分孙银鸽
  app.controller("hotCtrl",function($scope,$http,$timeout){
  	     $http.get("data/movie.json")
  	     .success(function(data){
  	     	$scope.hot=data.movieTitle[1].movieCon[0].hotMoive;
//	     	console.log($scope.hot)
  	     	 $scope.bannar = data.bannar;
//	    	  console.log($scope.bannar);
	    	  $scope.list = data.list;
//	    	  console.log( $scope.list);
             $scope.hotMovie = data.hotMovie;
//	     	console.log( $scope.hotMovie);
  	     	
//	     	  console.log(data);
              $scope.movieTitle = data.movieTitle;
//            console.log($scope.movieTitle);
//            console.log(data.movieTitle[0].movieCon);
              
              var selected=$scope.selected;  
	            $scope.show=function(index){  
	                $scope.selected=index;  
	            };    
              
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
                     number:2,
			        slidesPerView: 3.2,
			        paginationClickable: true,
			        spaceBetween: 20
			    });
			    
			    $(".waitCon>.movieList").click(function(){
			    	var index=$(this).index();
			    	window.open("view/details.html","_self")
			    })
	    },1000)
  })

//   hotctrl    第二部分孙银鸽

//sunyinge
    		
//  		樊倩倩

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
							$http.get("data/show.json")
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
					

//樊倩倩
    		
    		
    		
//			首页
app.controller("recommend",function($scope,$http){
//  //��ȡjson���
    $http.get("data/recommend.json").success(function(res){
        $scope.banner=res.banner;
        $scope.iconImg=res.iconFive;
        $scope.allmovie=res.allMovie;
        $scope.hotmovie1=res.hotMovie.hot1;
        $scope.hotmovie2=res.hotMovie.hot2;
        $scope.hotmovie3=res.hotMovie.hot3;
        $scope.cheapmovie1=res.hotMovie.cheap1;
        $scope.cheapmovie2=res.hotMovie.cheap2;
        $scope.cheapmovie3=res.hotMovie.cheap3;
    })
//  //banner�ֲ�
    var swiper=new Swiper(".a",{
        //���೤ʱ���л�һ��
        autoplay:2000,
        loop:true,
        //ͼƬ�л�֮���ֲ��Զ�����
        autoplayDisableOnInteraction:false,
        //Բ����ʾ���Ҹ���ͼƬ�ƶ�
        pagination:".swiper-pagination1",
        //���Բ���л���Ӧ��ͼƬ
        paginationClickable:true
    })

    //����
//  var aa=new IScroll("#content");

    //�ػ�
    var e = new Swiper('.e',{
        slidesPerView : 3.2,
        freeMode : true,
    })

    //�����ݳ�
    var b = new Swiper('.b',{
//        slidesPerView : 1,
        pagination : '.swiper-pagination2',
        uniqueNavElements :false
    })

    //�����ػ�
    var c = new Swiper('.c',{
        slidesPerView : 1,
        pagination : '.swiper-pagination3',
        uniqueNavElements :false
    })


    //�ֲ�
    var d=new Swiper(".d",{
        //���೤ʱ���л�һ��
        autoplay:2000,
        loop:true,
        //ͼƬ�л�֮���ֲ��Զ�����
        autoplayDisableOnInteraction:false,
        //Բ����ʾ���Ҹ���ͼƬ�ƶ�
        pagination:".swiper-pagination4",
        //���Բ���л���Ӧ��ͼƬ
        paginationClickable:true
    })


    //��ѡ��Ʒ
//    var f = new Swiper('.f',{
//        slidesPerView : 5,
//        freeMode: true,
//    })
})