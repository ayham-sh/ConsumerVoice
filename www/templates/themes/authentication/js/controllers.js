'use strict';
// Controller of login Page.
appControllers.controller('LoginCtrl', function ($scope, $state, $cordovaOauth,$mdDialog,LoginSer) {

 LoginSer.getUserInfo(function(rootUser){
    $scope.rootUser=rootUser;

   });
 $scope.user={
   name:'',
   password:'',
   nameState:true,
   passwordState:true
 };

  $scope.resetNameState= function(){
    $scope.user.nameState=true;
  };
  $scope.resetPasswordState= function(){

    $scope.user.passwordState=true;
  };

  $scope.signIn = function(user) {

    // var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   /* if (regex.test($scope.user.name)) {
      $scope.user.nameState = true;*/
      if ($scope.rootUser.name === $scope.user.name && $scope.rootUser.password === $scope.user.password) {
        console.log(true);

      }
      else {
        console.log(false);
        $scope.user.passwordState = false;


      }
  /*  } else {

      $scope.user.nameState = false;

    }*/

  }
  }
);
// End of  login controller.




// Controller of Signup  Page.
appControllers.controller('signupCtrl', function ($scope, $state, $cordovaOauth, $http, localStorage) {



});
// End of signupCtrl controller.

appServices.factory('LoginSer',function ($http) {

return {
  getUserInfo:function (successcb) {
    $http({method:'Get',url:'/data/1.json'}).
      success(function (data,status,headers,config) {
        successcb(data);
    }).
      error(function (data,status,headers,config) {
        $log.warn(data,status,headers(),config);
    });

  }

  };
})
