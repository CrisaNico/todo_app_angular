app.controller('AppController', ['swInfo', function( swInfo ){
    var vm = this;
    vm.nav = [
        {
            url:"#/",
            title:"Home"
        },{
            url:"#/todo",
            title:"ToDo App"
        }
    ];
    vm.ver = swInfo.version;
    vm.today = new Date();
	vm.maximizeContainer=function(id){
		var gc=document.getElementById(id);
		if (!gc) return;
		var t=gc.getBoundingClientRect().top;
		var h = window.innerHeight;
		if (h<200) h=200;
		gc.style.height=h-t-20;
	};
}]);