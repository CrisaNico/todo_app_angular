app.directive('appNav', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      items: '=' 
    }, 
    templateUrl: 'js/directives/appNav.html' 
  }; 
});
