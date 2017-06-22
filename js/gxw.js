
app.controller("fanctrl",function($scope,$http){
	$scope.list=[];
	$scope.a=0;
	$http({
		mothed:"GET",
		url:"data/gxw-data.json"
	}).then(function(respones){
		$scope.list=respones.data;
		//console.log(respones.data);
//		console.log($scope.list.one[0].lala);
		
		$scope.$watch('a',function(newValue,oldValue, scope){
			var len=$('.img_live ul li').length;
			var ul=$('.img_live ul');
			var index=0;
			 $('.img_live').swipeLeft(function(){
			 	index++;
			 	if(index>=2){
			 		index=2;
			 	}
			 	var mas="-"+16*index+"rem";
			 	ul.animate({"margin-left":mas});
	        }).swipeRight(function(){
	        	index--;{
	        		if(index<=0){
	        			index=0
	        		}
	        		var mas="-"+16*index+"rem";
			 		ul.animate({"margin-left":mas});
	        	}
	        })
			 
//			 function change(){
//			 	var mas="-"+16*index+"rem";
//			 	ul.animate({"margin-left":mas});
//			 }
		
		});
		 
	});
})