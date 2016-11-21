var app = angular.module('app',['ngRoute']);
app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}
app.config(app.conf);