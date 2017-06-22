;(function($){
//             轮播
   				var index= 0,
                len=$("#imgbox>li").length,
                ul=$("#imgbox");
            	span=$("#dian>span");
	            //自动轮播
	            var timer=setInterval(play,2000);
	            function play(){
	                //先判断，后增加
	                if(index>=len-1){
	                    index=0;
	                    ul.css("margin-left",0);
	                }
	                index++;
	                change();
	            }
	

	            ul.swipeLeft(function(){
	            	
	                clearInterval(timer);
	                play();
	                setTimeout(function(){
	                    timer=setInterval(function(){
	                        play();
	                        change();
	                    },2000)
	                },500);
	            }).swipeRight(function(){
	                clearInterval(timer);
	

                if(index<=0){
                    index=len-1;
                    var mas="-"+100*index+"%";
                    ul.css("margin-left",mas);
                }
                index--;
                change();
                setTimeout(function(){
                    setInterval(function(){
	                        play();
	                        change();
	                    },2000);
	                },500);
	            })


            function change(){
                var mar="-"+100*index+"%";
                ul.animate({"margin-left":mar});
                span.eq(index).addClass("on").siblings().removeClass("on");
                if(index==len-1){
                    span.eq(0).addClass("on").siblings().removeClass("on");
                }
            }
            
//          var div=$('.img_live');
//          
//          var len=$('.img_live ul li');
//          div.swipeLeft(function(){
//          	//console.log(len)
//          })
})(Zepto);
