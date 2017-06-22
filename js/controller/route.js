/**
 * Created by Administrator on 2017/5/23.
 */
var app=angular.module("myapp",["ngRoute"]);
//·��
app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when("/footer1",{
            templateUrl:"view/recommend.html",
            controller:"recommend"
        })
        .otherwise({
            redirectTo:"/footer1"
        })
}])

//new һ��swiper��iscroll
app.controller("recommend",function($scope,$http){
    //��ȡjson���
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
    //banner�ֲ�
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
    var aa=new IScroll("#content");

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


