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
	$scope.verfity =true;
  var regex = /^(([^<😠)[\]\\.,;:\s@\"]+(\.[^<😠)[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test($scope.user.Email))
  {  $scope.verfiy = true  }
  else
  {$scope.verfiy = false}

});
// End of signupCtrl controller.
