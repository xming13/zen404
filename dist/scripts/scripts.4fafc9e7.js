"use strict";angular.module("zen404App",["ngAnimate","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{redirectTo:"/error-1"}).when("/error-1",{templateUrl:"views/error-1.html"}).when("/error-2",{templateUrl:"views/error-2.html"}).when("/error-3",{templateUrl:"views/error-3.html"}).when("/error-4",{templateUrl:"views/error-4.html"}).when("/error-5",{templateUrl:"views/error-5.html"}).when("/error-6",{templateUrl:"views/error-6.html"}).when("/error-7",{templateUrl:"views/error-7.html"}).otherwise({redirectTo:"/error-1"})}]),jQuery.fn.textillate.defaults["in"].delay=100,angular.module("zen404App").controller("MainCtrl",["$scope","$location",function(a,b){a.nextError=function(){var a=b.path();if(0===a.indexOf("/error-")){var c=a.charAt(7);if(c=parseInt(c)+1,c===c){if(c>=1&&7>=c)return void b.path("/error-"+c);if(8===c)return void b.path("/error-1")}}b.path("/error-2")},a.randomError=function(){var a,c=b.path(),d=0===c.indexOf("/error-")?parseInt(c.charAt(7)):-1;do a=Math.floor(7*Math.random()+1);while(d===a);b.path("/error-"+a)}}]),angular.module("zen404App").directive("textillate",function(){return{restrict:"A",link:function(a,b,c){var d=angular.element(b),e=d.data("initialDelay")?d.data("initialDelay"):0;d.textillate({initialDelay:e})}}});