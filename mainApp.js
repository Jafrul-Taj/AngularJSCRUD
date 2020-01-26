var mainApp = angular.module("mainApp", []);

mainApp.controller("myController", function($scope) {

    $scope.users = [
        { userName: "Fahim", fullName: "Fahim Arshad", email: "fahim@gmail.com" },
        { userName: "Monir", fullName: "Monir-uz-Zaman", email: "monir@gmail.com" },
        { userName: "Fayed", fullName: "Nur-Al-Fayed", email: "fayed@gmail.com" }
    ];
    $scope.newUser = {};
    $scope.clickedUser = {};
    $scope.message = {};
    $scope.reset = function() {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "A user is added in the table";
    }
    $scope.selectUser = function(user) {
        $scope.clickedUser = user;
        //console.log(user);
    }
    $scope.deleteUser = function() {
        $scope.users.splice($scope.users.indexOf($scope.clickedUser))
        $scope.message = "A user is deleted from the table";
        //console.log(user);
    }
    $scope.updateUser = function() {
        $scope.message = "User information  is updated";
        //console.log(user);
    }


    $scope.clearMessage = function() {
        $scope.message = ""; //console.log(user);
    }

});