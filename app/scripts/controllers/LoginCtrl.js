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
  .controller('LoginCtrl', ['$scope', 'UserModel', function ($scope, $userModel) {

    $scope.user = null;

    $scope.signUp = (function(user) {

      $userModel.create(user.email, user.password);

      if($userModel.isValid()) {
        $userModel.save()
          .then(function(result){
            console.log('GOOD!');
            console.log(result);
          })
          .catch(function(result){
            console.log('ERROR');
            console.log(result);
          });
      }

    });

  }]);
