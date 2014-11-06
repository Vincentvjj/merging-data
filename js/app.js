/* 
    app.js
    Angular application for the address book challenge

    Add code here to create a new Angular application and controller.
    The array of employee objects is already in a global variable named 'pawneeEmployees'
*/


"use strict";

angular.module('AddressBook', [])
    .controller('AddressController', function($scope) {
        $scope.employees = pawneeEmployees;
        $scope.sortCol = 'lastName';
        $scope.ifSortedBy = function(name) {
            return name === $scope.sortCol;
        }
        $scope.searchString = '';
        $scope.sortReverse = false;
        $scope.isActive = false;

        $scope.sortBy = function(colName) {
            $scope.isActive = true;
            if($scope.sortCol == colName) {
                 $scope.sortReverse = !$scope.sortReverse;
            }
            else {
                 $scope.sortReverse = false;

            }
            $scope.sortCol = colName;
            $scope.isActive = false;
        };
    });