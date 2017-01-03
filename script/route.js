app = angular.module('myapp', ['ngRoute' , 'ngAnimate']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/' , {
    templateUrl: 'views/top.html'
  })
  .when('/taskList' , {
    templateUrl: 'views/taskList.html',
    controller: 'taskListController as taskList',
  })
  .when('/bookmark' , {
   templateUrl: 'views/bookmark.html',
   controller: 'bookMarkController as bookMark'
  })
  .when('/bookmark/new' , {
    templateUrl: 'views/updateBookMark.html',
    controller: 'bookMarkController as bookMark'
  })
  .when('/bookmark/new/:index' , {
    templateUrl: 'views/updateBookMark.html',
    controller: 'bookMarkController as bookMark'
  })
  .otherwise({
    redirectTo: '/'
  });
});
