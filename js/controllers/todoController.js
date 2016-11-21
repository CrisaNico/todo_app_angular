app.controller('TodoController', ['$scope', 'crudService','$routeParams','$http', function($scope, crudService,$routeParams,$http){
    var vm = $scope;
    window.vm=vm;
    vm.id= $routeParams && $routeParams.id || false;
    vm.data = [];
    vm.gridTodoOptions={
        columnDefs:[
            { name: 'tasks'},
            { name: 'deadline'}
        ],
        enableCellEditOnFocus: true,
        enableRowSelection: true,
        selectionRowHeaderWidth: 35,
        enableSelectAll: true,
        multiSelect: true,
        onRegisterApi:function(gridApi){
            vm.gridTodoApi = gridApi;
        }
    };

    var populateData = function(response){
        vm.data = response.data && response.data.docs ||[];
        if(vm.id){            
            vm.d=vm.data[0] || {};
            vm.d.deadline=new Date(vm.d.deadline);
            if (!vm.d.todo) vm.d.todo=[];
            vm.gridTodoOptions.data=vm.d.todo;
        }
    };

    vm.createTodo=function(){
        vm.d.todo.push({})
    };

    vm.removeTodo = function(){
        vm.gridTodoApi.grid.rows.map(function(r){
            if (r.isSelected) vm.d.todo.splice(vm.d.todo.indexOf(r.entity),1)
        })
    };

    vm.read = function(){
        var fnd={"cat":"eventi"};
        if(vm.id) fnd._id=vm.id;
        crudService.fnd(fnd, populateData);
    };
    
    vm.save = function(){
        vm.d.cat='eventi';
        if (vm.id=='new') delete(vm.id)
        crudService.set(vm.d,function(r){
            if (!vm.id){
                window.location="#/todo/"+r.id
            }
        });
    };

    vm.remove = function(){
        crudService.del(vm.d,function(r){
            window.location="#/todo/"
        });
    };

    vm.init = function(){
        vm.read();
        var pr=function(){
            $('[ng-model="cognome]').focus()
        }
        $(pr)
    };
    vm.init();
}]);