/**
 * Created by Administrator on 2017/5/23.
 */
var app=angular.module("myApp",["ngRoute"]);
//·��

//new һ��swiper��iscroll
app.controller("moreMember",function($scope,$http){
    //��ȡjson����
    $http.get("../data/moreMember.json").success(function(res){
        $scope.more=res.moreMember;
    })
})


