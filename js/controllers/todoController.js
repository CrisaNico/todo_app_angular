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

    
}]);