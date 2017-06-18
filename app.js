(function () {
"use strict";
angular
	.module("blog",["ui.router"])
	.directive("mainData",function(){
		return {
			templateUrl: "view/home.view.html"
		}
	});
})();