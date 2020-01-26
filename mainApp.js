var mainApp = angular.module("mainApp", []);

mainApp.controller("myController", function($scope) {

    $scope.users = [
        { userName: "Fahim", fullName: "Fahim Arshad", email: "fahim@gmail.com" },
        { userName: "Monir", fullName: "Monir-uz-Zaman", email: "monir@gmail.com" },
        { userName: "Fayed", fullName: "Nur-Al-Fayed", email: "fayed@gmail.com" }
    ];
    $scope.newUser = {};
    $scope.clickedUser = {};

    $scope.reset = function() {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    }
    $scope.selectUser = function(user) {
        $scope.clickedUser = user;
        //console.log(user);
    }

});