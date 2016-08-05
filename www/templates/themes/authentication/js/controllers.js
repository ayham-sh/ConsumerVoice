// Controller of login Page.

appControllers.controller('LoginCtrl', function ($scope, $state, $cordovaOauth, $http, localStorage) {




});
// End of  login controller.




// Controller of Signup  Page.
appControllers.controller('signupCtrl', function ($scope, $state, $cordovaOauth, $http) {

	 $scope.user ={
		name : '',
		Email : '',
		Pass1 :'',
		Pass2 :'',
		Address :'',
		Sahip :''

	};

 $scope.password = function ( user)
 {
   if ( user.Pass1 === user.Pass2)
   { return "" ; }
   else {
     return "the password is not match ";
   }

 }

	$scope.verfity =true;
  var regex = /^(([^<😠)[\]\\.,;:\s@\"]+(\.[^<😠)[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test($scope.user.Email))
  {  $scope.verfiy = true  }
  else
  {$scope.verfiy = false}

  $scope.emailvalid= function myfunction( NewForm ) {
    if(NewForm.EventEmail.$error.email)
    {
      return "plaese enter valid Email"
    }
    else {
      return ""
    }
  }


});
// End of signupCtrl controller.
