'use strict';

angular.module('jcourt2App')
    .controller('HearingDetailController', function ($scope, $rootScope, $stateParams, entity, Hearing) {
        $scope.hearing = entity;
        $scope.load = function (id) {
            Hearing.get({id: id}, function(result) {
                $scope.hearing = result;
            });
        };
        $rootScope.$on('jcourt2App:hearingUpdate', function(event, result) {
            $scope.hearing = result;
        });
    });
