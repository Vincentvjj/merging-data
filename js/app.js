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
            if($scope.sortCol == name) {
                return true;
            }
            else {
                return false;
            }
        }
        $scope.searchString = '';

        $scope.sortBy = function(colName) {
            $scope.sortCol = colName;
        };
    });