app.controller('ToDoControlelr', ['$scope', 'crudService', '$routeParams', '$http', function($scope, crudService,$routeParams,$http){
    var vm = $scope;
    windows.vm=vm;
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
        var data = response.data && response.data.docs ||[];
        vm.data=JSON.parse(JSON.stringify(data));
        if(vm.id){
            vm.d=vm.data[0] || {};
            vm.gridTodoOptions.data=vm.d.todo;
        }
    };

    vm.createTodo=function(){
        vm.d.todo.push({})
    };

    vm.removeTodo = function(){

    };

}]);