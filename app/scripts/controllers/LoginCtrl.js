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
  .controller('LoginCtrl', ['$scope', '$state', 'UserModel', function ($scope, $state, $userModel) {

    $scope.user = null;

    $scope.signUp = (function(user) {

      $userModel.create(user.email, user.password);

      if($userModel.isValid()) {
        $userModel.signUp()
          .then(function(result){
            // TODO: show a message to the user (toastr)
            console.log(result);
            alert("USER CREATED!");
            $state.go('user.login');
          })
          .catch(function(result){
            // TODO: show a message to the user (toastr)
            alert("ERROR (see console)!");
            console.log('ERROR');
            console.log(result);
          });
      }

    });

    $scope.signIn = (function(user) {

      $userModel.create(user.email, user.password);

      if($userModel.isValid()) {
        $userModel.signIn()
          .then(function(result){
            // TODO: show a message to the user (toastr)
            alert('LOGED!');
            console.log(result);
          })
          .catch(function(result){
            // TODO: show a message to the user (toastr)
            alert("ERROR (see console)!");
            console.log('ERROR');
            console.log(result);
          });
        }
    });

  }]);
