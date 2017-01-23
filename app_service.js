(
function(){
	var app = angular.module("contactApp");
	app.value("appSvc", {
		"name":"Angular App",
		"address":"2, nyk",
		 version:1
	});

	app.value("logFun", function(){
		console.log("Hello");
	});

	app.factory("appFac", function(){
		return {
		"name":"Angular App",
		"address":"2, nyk",
		 version:1
		}	
	});

	app.factory("appFac2", function(appSvc){
		var value = {};
		value.name = appSvc.name;
		value.address = "2, nyk";
		return value;
	});

}
)();

