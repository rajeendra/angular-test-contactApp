(
function(){
	var app = angular.module("contactApp");

	app.controller("contactCtrl", contactCtrl);

	app.controller("headerCtrl", headerCtrl);

	app.controller("footerCtrl", footerCtrl);


function contactCtrl(appDataSvc){
	//this.contact=appDataSvc.contacts;
	var self = this;
	self.editMode = false;

	appDataSvc.getContacts()
	.then(function(raj_data){
		self.contact=raj_data;
	});

	//$http.get('http://localhost:3000/contacts/')
	//.then(function(response) {
	//	self.contact=response.data;
	//});

	this.selectedContactx=function(index){
		this.editMode=false;
		self.successMsg=undefined;
		self.errorMsg=undefined;
		this.selectedContact=this.contact[index];
	}

	this.toggleEditMode=function(){
		this.editMode = !this.editMode;
	}


	this.saveUser=function(){
		this.toggleEditMode();
		var userData = this.selectedContact;
		appDataSvc.saveUser(userData)
		.then(function(){self.successMsg="save OK";},function(){self.errorMsg="save Failed";})
	}

}

function headerCtrl(appSvc, logFun, appFac, appFac2, appSerSvc){
	//this.title=appSvc.name;
	//this.title=appFac2.name;
	this.title=appSerSvc.name;
	logFun();
}

function footerCtrl(appSvc, logFun, appFac, appFac2, appSerSvc){
	//this.title=appSvc.name;
	//this.title=appFac2.name;
	this.title=appSerSvc.name;
	logFun();
}




}
)();


