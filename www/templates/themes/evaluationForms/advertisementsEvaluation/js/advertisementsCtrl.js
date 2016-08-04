appControllers.controller('advertisementEvCtrl', function ($scope) {

  $scope.slctWait = [
    {point : "1 Çok Kötü"},
    {point : "2"},
    {point : "3"},
    {point : "4"},
    {point : "5 Çok Başarılı"}
  ];

  $scope.slctStaff = [
    {point : "1 Profesyonel ve Samimi Değildi "},
    {point : "2"},
    {point : "3"},
    {point : "4"},
    {point : "5 Çok Profesyonel ve Samimi"}
  ];

  $scope.slctProductPrice = [
    {point : "1 Çok başarısızlardı "},
    {point : "2"},
    {point : "3"},
    {point : "4"},
    {point : "5 Çok Çok Başarılılardı"}
  ];
});
