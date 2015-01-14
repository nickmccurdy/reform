var app = angular.module("ReForm", []);

app.controller("FormController", function ($scope) {
  $scope.amount = 0;
  $scope.people = 1;
  $scope.tip = 15;

  $scope.getTip = function (amount, tip) {
    return amount * tip / 100;
  }
});
