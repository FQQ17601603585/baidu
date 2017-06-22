/**
 * Created by Administrator on 2017/5/23.
 */
var app=angular.module("myApp",["ngRoute"]);
//路由

//new 一个swiper和iscroll
app.controller("moreMember",function($scope,$http){
    //读取json数据
    $http.get("../data/moreMember.json").success(function(res){
        $scope.more=res.moreMember;
    })
})


