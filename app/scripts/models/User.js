'use strict';

/**
 * @ngdoc function
 * @name frontendApp.service:UserModel
 * @description
 * # userModel
 * Model of the frontendApp
 */
angular
  .module('frontendApp')
  .service('UserModel', ['$http', 'cfg', function ($http, $CONSTANTS) {

    var $headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };

    return {

      $email: '',
      $password: '',

      create: function(email, password) {
        this.$email = email;
        this.$password = password;
      },

      isValid: function() {
        if(this.$email.length < 1) {
          return false;
        }

        if(this.$password.length < 1) {
          return false;
        }

        return true;
      },

      save: function() {
        return $http({
          url: $CONSTANTS.URL() + $CONSTANTS.SIGN_UP,
          method: 'PUT',
          headers: $headers,
          data: {email: this.$email, password: this.$password}
        });
      }

    };

  }]);
