angular.module('MyApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'user'
      })
      .when('/search', {
        templateUrl: 'partials/search.html'
        // controller: 'SearchCtrl'
      })
      .when('/notifications', {
        templateUrl: 'partials/notifications.html'
        // controller: 'NotificationsCtrl'
      })
      .when('/messages', {
        templateUrl: 'partials/messages.html'
        // controller: 'MessagesCtrl'
      })
      .otherwise({
        templateUrl: 'partials/404.html'
      });
  })
