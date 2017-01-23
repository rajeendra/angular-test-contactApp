(
function(){
	var app = angular.module("contactApp");
	app.service("appSerSvc", appSerSvcFun);

	function appSerSvcFun(appSvc){
		//var value = {};
		this.name = appSvc.name;
		this.address = "2, nyk";
		//return value;
	};

}
)();

