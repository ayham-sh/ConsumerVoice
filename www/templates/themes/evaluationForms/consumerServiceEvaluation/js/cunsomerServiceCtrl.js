appControllers.controller('consumerService', function ($scope) {

  $scope.slctMeet = [
    {value : "Evet"},
    {value : "Hayır"}
  ];

  $scope.slctWait = [
    {value : "1 Çok Uzun "},
    {value : "2"},
    {value : "3"},
    {value : "4"},
    {value : "5 Çok Kısa"}
  ];

  $scope.slctStaffApproach = [
    {value : "1 Çok başarısızlardı "},
    {value : "2"},
    {value : "3"},
    {value : "4"},
    {value : "5 Çok Çok Başarılılardı"}
  ];

  $scope.slctProblemSolution = [
    {value : "1 Kesinlikle Hayır  "},
    {value : "2"},
    {value : "3"},
    {value : "4"},
    {value : "5 Kesinlikle Evet"}
  ];
});
