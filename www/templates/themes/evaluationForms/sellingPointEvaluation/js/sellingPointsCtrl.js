appControllers.controller('sellignPoints', function ($scope) {

  $scope.points = "";
  $scope.slctService = [
    {point : "1 Çok Kötü"},
    {point : "2"},
    {point : "3"},
    {point : "4"},
    {point : "5 Çok Başarılı"}
  ];

  $scope.slctStaffApproach = [
    {point : "1 Profesyonel ve Samimi Değildi "},
    {point : "2"},
    {point : "3"},
    {point : "4"},
    {point : "5 Profesyonel ve Samimi"}
  ];

  $scope.slctProductsPrice = [
    {point : "1 Çok başarısızlardı "},
    {point : "2"},
    {point : "3"},
    {point : "4"},
    {point : "5 Çok Başarılılardı"}
  ];
});
