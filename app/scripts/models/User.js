'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:LoginCtrl
 * @description
 * # loginCtrl
 * Controller of the frontendApp
 */
angular
  .module('frontendApp')
  .service('UserModel', function () {

    var $email, $password;

    var UserFactory = (function() {

      $email = $password = null;

    });

    var UserFactory = (function (email, pass) {

      $email = email;
      $password = pass;

    });

  });
