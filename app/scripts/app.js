'use strict';

/**
 * @ngdoc overview
 * @name frontendApp
 * @description
 * # frontendApp
 *
 * Main module of the application.
 */
angular
  .module('frontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'views/index/header.html'
          },
          'body': {
            templateUrl: 'views/index/body.html'
          },
          'footer': {
            templateUrl: 'views/index/footer.html'
          }
        }
      })
      .state('user', {
        url: '/user',
        abstract: true,
        views: {
          'header': {
            template: '<div ui-view="header"></div>'
          },
          'body': {
            template: '<div ui-view="body"></div>'
          },
          'footer': {
            template: '<div ui-view="footer"></div>'
          }
        }
      })
      .state('user.signup', {
        url: '/signup',
        views: {
          'header': {
            templateUrl: 'views/user/signup/header.html'
          },
          'body': {
            templateUrl: 'views/user/signup/body.html'
          },
          'footer': {
            templateUrl: 'views/user/signup/footer.html'
          }
        }
      })
      .state('user.login', {
        url: '/login',
        views: {
          'header': {
            templateUrl: 'views/user/signin/header.html'
          },
          'body': {
            templateUrl: 'views/user/signin/body.html'
          },
          'footer': {
            templateUrl: 'views/user/signin/footer.html'
          }
        }
      });

    $locationProvider.html5Mode(true);
  });
