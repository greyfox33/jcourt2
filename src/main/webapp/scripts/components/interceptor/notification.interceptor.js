 'use strict';

angular.module('jcourt2App')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jcourt2App-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jcourt2App-params')});
                }
                return response;
            },
        };
    });