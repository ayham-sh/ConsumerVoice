appControllers.controller('serviceEv', function ($scope) {

  $scope.serviceBranch = "";
  $scope.slctServiceDuration = [
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

  $scope.slctStaffFixing = [
    {point : "1 Çok yetersizdi "},
    {point : "2"},
    {point : "3"},
    {point : "4"},
    {point : "5 Çok Yeterliydi"}
  ];

});
