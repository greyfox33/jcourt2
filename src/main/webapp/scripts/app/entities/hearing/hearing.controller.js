'use strict';

angular.module('jcourt2App')
    .controller('HearingController', function ($scope, Hearing, External, AuthToken) {
        $scope.hearings = [];
        $scope.tokenResults = []
        debugger;
        $scope.loadAll = function() {
            Hearing.query(function(result) {
               $scope.hearings = result;
            });
            $scope.tokenResults = AuthToken.getToken();
        };
        $scope.loadAll();

        $scope.delete = function (id) {
            Hearing.get({id: id}, function(result) {
                $scope.hearing = result;
                $('#deleteHearingConfirmation').modal('show');
            });
        };

        $scope.confirmDelete = function (id) {
            Hearing.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteHearingConfirmation').modal('hide');
                    $scope.clear();
                });
        };
        // (RMT-12/29/15) sending the post request goes here
        $scope.sendHearing = function (id) {
            debugger;
            var sendResults = [];
        	sendResults = External.get();
        	return sendResults;
        };
        
//        $scope.getToken = function() {
//        	var tokenResults = [];
//        	tokenResults = Auth.getToken();
//        	return tokenResults;
//        }
//        $scope.getToken();
        
        $scope.refresh = function () {
            $scope.loadAll();
            $scope.clear();
        };

        $scope.clear = function () {
            $scope.hearing = {countyCode: null, hearingType: null, courtDept: null, date: null, status: null, judge: null, cwcaseid: null, doc: null, image: null, summary: null, attendeeFirst: null, attendeeLast: null, time: null, language: null, id: null};
        };

        $scope.abbreviate = function (text) {
            if (!angular.isString(text)) {
                return '';
            }
            if (text.length < 30) {
                return text;
            }
            return text ? (text.substring(0, 15) + '...' + text.slice(-10)) : '';
        };

        $scope.byteSize = function (base64String) {
            if (!angular.isString(base64String)) {
                return '';
            }
            function endsWith(suffix, str) {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
            }
            function paddingSize(base64String) {
                if (endsWith('==', base64String)) {
                    return 2;
                }
                if (endsWith('=', base64String)) {
                    return 1;
                }
                return 0;
            }
            function size(base64String) {
                return base64String.length / 4 * 3 - paddingSize(base64String);
            }
            function formatAsBytes(size) {
                return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " bytes";
            }

            return formatAsBytes(size(base64String));
        };
    });
